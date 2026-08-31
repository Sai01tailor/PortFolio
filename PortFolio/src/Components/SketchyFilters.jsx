import React from 'react';

const SketchyFilters = () => {
    return (
        <svg width="0" height="0" style={{ position: 'absolute' }}>
            <defs>
                {/* Rough Sketch Filter - Light */}
                <filter id="sketchy-light">
                    <feTurbulence 
                        type="fractalNoise" 
                        baseFrequency="0.05" 
                        numOctaves="3" 
                        result="noise"
                    />
                    <feDisplacementMap 
                        in="SourceGraphic" 
                        in2="noise" 
                        scale="3" 
                        xChannelSelector="R" 
                        yChannelSelector="G"
                    />
                </filter>

                {/* Rough Sketch Filter - Medium */}
                <filter id="sketchy-medium">
                    <feTurbulence 
                        type="fractalNoise" 
                        baseFrequency="0.08" 
                        numOctaves="4" 
                        result="noise"
                    />
                    <feDisplacementMap 
                        in="SourceGraphic" 
                        in2="noise" 
                        scale="5" 
                        xChannelSelector="R" 
                        yChannelSelector="G"
                    />
                </filter>

                {/* Rough Sketch Filter - Heavy */}
                <filter id="sketchy-heavy">
                    <feTurbulence 
                        type="fractalNoise" 
                        baseFrequency="0.1" 
                        numOctaves="5" 
                        result="noise"
                    />
                    <feDisplacementMap 
                        in="SourceGraphic" 
                        in2="noise" 
                        scale="8" 
                        xChannelSelector="R" 
                        yChannelSelector="G"
                    />
                </filter>

                {/* Hand-Drawn Pencil Effect */}
                <filter id="pencil-sketch">
                    <feTurbulence 
                        type="fractalNoise" 
                        baseFrequency="2" 
                        numOctaves="5" 
                        result="turbulence"
                    />
                    <feDisplacementMap 
                        in="SourceGraphic" 
                        in2="turbulence" 
                        scale="2" 
                        xChannelSelector="R" 
                        yChannelSelector="G" 
                        result="displace"
                    />
                    <feGaussianBlur in="displace" stdDeviation="0.5" result="blur"/>
                </filter>

                {/* Rough Paper Texture */}
                <filter id="paper-texture">
                    <feTurbulence 
                        type="fractalNoise" 
                        baseFrequency="0.8" 
                        numOctaves="4" 
                        result="noise"
                    />
                    <feDiffuseLighting 
                        in="noise" 
                        lightingColor="white" 
                        surfaceScale="1" 
                        result="light"
                    >
                        <feDistantLight azimuth="45" elevation="60"/>
                    </feDiffuseLighting>
                    <feComposite 
                        in="SourceGraphic" 
                        in2="light" 
                        operator="arithmetic" 
                        k1="0.2" 
                        k2="0.8" 
                        k3="0.2" 
                        k4="0"
                    />
                </filter>

                {/* Crayon/Chalk Effect */}
                <filter id="crayon">
                    <feTurbulence 
                        type="fractalNoise" 
                        baseFrequency="1.5" 
                        numOctaves="3" 
                        result="noise"
                    />
                    <feColorMatrix 
                        in="noise" 
                        type="saturate" 
                        values="0" 
                        result="grayscale"
                    />
                    <feComponentTransfer in="grayscale" result="contrast">
                        <feFuncA type="discrete" tableValues="0 1"/>
                    </feComponentTransfer>
                    <feDisplacementMap 
                        in="SourceGraphic" 
                        in2="contrast" 
                        scale="4" 
                        xChannelSelector="R" 
                        yChannelSelector="G"
                    />
                </filter>

                {/* Watercolor Blend */}
                <filter id="watercolor">
                    <feTurbulence 
                        type="fractalNoise" 
                        baseFrequency="0.03" 
                        numOctaves="3" 
                        result="noise"
                    />
                    <feDisplacementMap 
                        in="SourceGraphic" 
                        in2="noise" 
                        scale="10" 
                        xChannelSelector="R" 
                        yChannelSelector="G" 
                        result="displace"
                    />
                    <feGaussianBlur in="displace" stdDeviation="1.5" result="blur"/>
                    <feComponentTransfer in="blur">
                        <feFuncA type="linear" slope="0.9"/>
                    </feComponentTransfer>
                </filter>

                {/* Rough Border/Edge Effect */}
                <filter id="rough-edge">
                    <feTurbulence 
                        type="fractalNoise" 
                        baseFrequency="0.15" 
                        numOctaves="2" 
                        result="noise"
                    />
                    <feDisplacementMap 
                        in="SourceGraphic" 
                        in2="noise" 
                        scale="6" 
                        xChannelSelector="R" 
                        yChannelSelector="G"
                    />
                    <feMorphology operator="erode" radius="0.5"/>
                </filter>

                {/* Ink Sketch */}
                <filter id="ink-sketch">
                    <feTurbulence 
                        baseFrequency="0.5" 
                        numOctaves="3" 
                        result="noise"
                    />
                    <feDisplacementMap 
                        in="SourceGraphic" 
                        in2="noise" 
                        scale="2" 
                        xChannelSelector="R" 
                        yChannelSelector="B"
                    />
                    <feGaussianBlur stdDeviation="0.3"/>
                </filter>

                {/* Marker Effect */}
                <filter id="marker">
                    <feTurbulence 
                        type="turbulence" 
                        baseFrequency="0.6" 
                        numOctaves="2" 
                        result="noise"
                    />
                    <feDisplacementMap 
                        in="SourceGraphic" 
                        in2="noise" 
                        scale="3" 
                        xChannelSelector="R" 
                        yChannelSelector="G" 
                        result="displace"
                    />
                    <feGaussianBlur in="displace" stdDeviation="0.8"/>
                </filter>
            </defs>
        </svg>
    );
};

export default SketchyFilters;
