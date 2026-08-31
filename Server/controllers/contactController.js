import twilio from 'twilio';
import ContactMessage from '../models/ContactMessage.js';

/**
 * Format phone number to Twilio WhatsApp address format (whatsapp:+[Number])
 * @param {string} number 
 * @returns {string}
 */
const formatWhatsAppNumber = (number) => {
  if (!number) return '';
  const trimmed = number.trim();
  if (trimmed.startsWith('whatsapp:')) {
    return trimmed;
  }
  const cleanNumber = trimmed.startsWith('+') ? trimmed : `+${trimmed}`;
  return `whatsapp:${cleanNumber}`;
};

/**
 * @desc    Submit contact message & send WhatsApp notification via Twilio
 * @route   POST /api/v1/contact
 * @access  Public
 */
export const submitContactForm = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    // 1. Validation
    if (!name || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Name is required.',
      });
    }

    if (!email || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Email is required.',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Message content is required.',
      });
    }

    // 2. Save Contact Message to MongoDB
    const newMessage = await ContactMessage.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      whatsappNotificationStatus: 'pending',
    });

    // 3. Send WhatsApp Notification via Twilio (non-blocking / gracefully handled)
    const {
      TWILIO_ACCOUNT_SID,
      TWILIO_AUTH_TOKEN,
      TWILIO_WHATSAPP_NUMBER,
      MY_PERSONAL_NUMBER,
    } = process.env;

    if (
      TWILIO_ACCOUNT_SID &&
      TWILIO_AUTH_TOKEN &&
      TWILIO_WHATSAPP_NUMBER &&
      MY_PERSONAL_NUMBER
    ) {
      try {
        const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

        const from = formatWhatsAppNumber(TWILIO_WHATSAPP_NUMBER);
        const to = formatWhatsAppNumber(MY_PERSONAL_NUMBER);
        const body = `New Portfolio Message from ${name.trim()} - ${email.trim()}: ${message.trim()}`;

        await client.messages.create({ from, to, body });

        newMessage.whatsappNotificationStatus = 'sent';
        await newMessage.save();
      } catch (twilioError) {
        console.error('Twilio WhatsApp Notification Error:', twilioError.message);
        newMessage.whatsappNotificationStatus = 'failed';
        await newMessage.save();
      }
    } else {
      console.warn('Twilio credentials not fully configured in .env. Skipping WhatsApp notification.');
      newMessage.whatsappNotificationStatus = 'disabled';
      await newMessage.save();
    }

    // 4. Return success response
    return res.status(200).json({
      success: true,
      message: 'Message sent successfully!',
    });
  } catch (error) {
    next(error);
  }
};
