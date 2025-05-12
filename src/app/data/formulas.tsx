export const formulas = [
    // Basic Wave Shapes
    {
      id: 'sin',
      name: 'sin(x)',
      image: '/images/sin(x).png',
      description: 'Generates a sine wave. Good for smooth and clean sounds.',
      category: 'Basic',
    },
    {
      id: 'cos',
      name: 'cos(x)',
      image: '/images/cos(x).png',
      description: 'Cosine wave, a phase-shifted sine wave. Also smooth and clean with a bit of groove.',
      category: 'Basic',
    },
    {
      id: 'sign',
      name: 'sign(x)',
      image: '/images/sign(x).png',
      description: 'Generates a square-like wave. Outputs -1 or 1 based on sign of x. Useful for wave folding and distortion.',
      category: 'Basic',
    },
    {
      id: 'abs',
      name: 'abs(x)',
      image: '/images/abs(x).png',
      description: 'Returns the absolute value of x. Useful for creating symmetric waveforms.',
      category: 'Basic',
    },
    {
      id: 'x',
      name: 'x',
      image: '/images/x.png',
      description: 'A linear shape, usually the foundation for custom made waveforms.',
      category: 'Basic',
    },
    {
      id: 'x_squared',
      name: 'x^2',
      image: '/images/x^2.png',
      description: 'Parabola which softens waveform and alters frequency harmonics in a smoother, sine-wave like way as opposed to natural harsher harmonics.',
      category: 'Basic',
    },
    {
      id: 'x_cubed',
      name: 'x^3',
      image: '/images/x^3.png',
      description: 'Adds more curve than x^2. Sharper, more distorted harmonics. Good for more aggressive, distorted sounds.',
      category: 'Basic',
    },
  
    // Modulation / Shape Control
    {
      id: 'sinx2',
      name: 'sin(x * 2)',
      image: '/images/sin(x2).png',
      description: 'Increases the amplitude of the sine wave, producing a higher tone.',
      category: 'Modulation',
    },
    {
      id: 'sinx_pow3',
      name: 'sin(x)^3',
      image: '/images/sin(x)^3.png',
      description: 'Sine wave with softer peaks and fewer high harmonics.',
      category: 'Modulation',
    },
    {
      id: 'sin_x_squared',
      name: 'sin(x^2)',
      image: '/images/sin(x^2).png',
      description: 'Produces a more complex and dissonant waveform. Good for metallic textures.',
      category: 'Modulation',
    },
    {
      id: 'sin_absx',
      name: 'sin(abs(x))',
      image: '/images/sin(abs(x)).png',
      description: 'Folds the sine wave upward, making it symmetrical and richer.',
      category: 'Modulation',
    },
    {
      id: 'sinx_signx',
      name: 'sin(x) * sign(x)',
      image: '/images/sin(x)*sign(x).png',
      description: 'Creates a phase-modulated sine wave with square-like aggression.',
      category: 'Modulation',
    },
  
    // Wave Folding / Distortion
    {
      id: 'atanx',
      name: 'atan(x)',
      image: '/images/atan(x).png',
      description: 'Produces soft clipping. A gentle distortion often used in analog emulation.',
      category: 'Distortion',
    },
    {
      id: 'tanhx',
      name: 'tanh(x)',
      image: '/images/tanh(x).png',
      description: 'More aggressive soft clipping than atan. Adds warmth and saturation.',
      category: 'Distortion',
    },
    {
      id: 'modx1',
      name: 'mod(x, 1)',
      image: '/images/mod(x,1).png',
      description: 'Creates a repeating sawtooth-like pattern. Great for rhythmic effects.',
      category: 'Distortion',
    },
    {
      id: 'fractx',
      name: 'fract(x)',
      image: '/images/fract(x).png',
      description: 'Extracts the fractional part of x, producing repeating patterns similar to mod.',
      category: 'Distortion',
    },
    {
      id: 'sincx',
      name: 'sin(x)/x',
      image: '/images/sinc(x).png',
      description: 'Sinc function, often used in filters. Produces a rounded central peak with side lobes.',
      category: 'Distortion',
    },
  
    // Symmetry and Inversion
    {
      id: 'negx',
      name: '-x',
      image: '/images/-x.png',
      description: 'Inverts the waveform vertically. Flips positive and negative amplitudes.',
      category: 'Symmetry',
    },
    {
      id: 'oneminusx',
      name: '1 - x',
      image: '/images/1-x.png',
      description: 'Inverts both vertically and horizontally. Useful for phase flipping.',
      category: 'Symmetry',
    },
    {
      id: 'abs_sinx',
      name: 'abs(sin(x))',
      image: '/images/abs(sin(x)).png',
      description: 'Rectified sine wave. Produces only positive values, useful for certain harmonics.',
      category: 'Symmetry',
    },
  
    // Combination Tricks
    {
      id: 'sin_sum',
      name: 'sin(x) + sin(2x)/2',
      image: '/images/sin(x)+sin(2x)/2.png',
      description: 'Adds a harmonic to the sine wave, resulting in a brighter sound.',
      category: 'Combination',
    },
    {
      id: 'sin_modulated',
      name: 'sin(x) * sin(x^2)',
      image: '/images/sin(x)*sin(x^2).png',
      description: 'Modulates a sine wave with a nonlinear curve. Great for gritty textures.',
      category: 'Combination',
    },
    {
      id: 'sinx_mult_x',
      name: 'sin(x) * x',
      image: '/images/sin(x)*x.png',
      description: 'Amplitude modulation of sine wave. Adds complexity as amplitude changes.',
      category: 'Combination',
    },
    {
      id: 'additive_sine',
      name: '(sin(x) + sin(2x) + sin(3x)) / 3',
      image: '/images/(sin(x)+sin(2x)+sin(3x))/3.png',
      description: 'Classic additive synthesis formula. Creates a fuller, harmonic-rich wave.',
      category: 'Combination',
    },
  
    // Noise / Chaos
    {
      id: 'fract_sin_noise',
      name: 'fract(sin(x * 43758.5453))',
      image: '/images/fract(sin(x*43758.5453)).png',
      description: 'Generates pseudorandom values, useful for noise and chaotic textures.',
      category: 'Noise',
    },
  ];