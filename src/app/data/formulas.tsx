export const formulas = [
    // Basic Wave Shapes
    {
      id: 'sin',
      name: 'sin(x)',
      image: '/images/sin(x).png',
      description: 'Generates a smooth sine wave. Ideal for pure tones and mellow sounds.',
      category: 'Basic',
    },
    {
      id: 'cos',
      name: 'cos(x)',
      image: '/images/cos(x).png',
      description: 'Cosine wave, same as sine but phase-shifted. Also produces soft, clean tones.',
      category: 'Basic',
    },
    {
      id: 'sign',
      name: 'sign(x)',
      image: '/images/sign(x).png',
      description: 'Generates a square-like wave. Outputs -1 or 1 based on sign of x.',
      category: 'Basic',
    },
    {
      id: 'abs',
      name: 'abs(x)',
      image: '/images/abs(x).png',
      description: 'Returns the absolute value of x. Useful for creating rectified and symmetric waveforms.',
      category: 'Basic',
    },
    {
      id: 'x',
      name: 'x',
      image: '/images/x.png',
      description: 'A linear ramp waveform, commonly used as a building block for custom waves.',
      category: 'Basic',
    },
    {
      id: 'x_squared',
      name: 'x^2',
      description: 'Parabolic curve. Softens waveform and alters harmonics in a smoother way.',
      category: 'Basic',
    },
    {
      id: 'x_cubed',
      name: 'x^3',
      description: 'Adds more curvature than x^2. Produces richer harmonic distortion.',
      category: 'Basic',
    },
  
    // Modulation / Shape Control
    {
      id: 'sinx2',
      name: 'sin(x * 2)',
      description: 'Increases the frequency of the sine wave, producing a higher tone.',
      category: 'Modulation',
    },
    {
      id: 'sinx_pow3',
      name: 'sin(x)^3',
      description: 'Sine wave with softer peaks and fewer high harmonics.',
      category: 'Modulation',
    },
    {
      id: 'sin_x_squared',
      name: 'sin(x^2)',
      description: 'Produces a more complex and dissonant waveform. Good for metallic textures.',
      category: 'Modulation',
    },
    {
      id: 'sin_absx',
      name: 'sin(abs(x))',
      description: 'Folds the sine wave upward, making it symmetrical and richer.',
      category: 'Modulation',
    },
    {
      id: 'sinx_signx',
      name: 'sin(x) * sign(x)',
      description: 'Creates a phase-modulated sine wave with square-like aggression.',
      category: 'Modulation',
    },
  
    // Wave Folding / Distortion
    {
      id: 'atanx',
      name: 'atan(x)',
      description: 'Produces soft clipping. A gentle distortion often used in analog emulation.',
      category: 'Distortion',
    },
    {
      id: 'tanhx',
      name: 'tanh(x)',
      description: 'More aggressive soft clipping than atan. Adds warmth and saturation.',
      category: 'Distortion',
    },
    {
      id: 'modx1',
      name: 'mod(x, 1)',
      description: 'Creates a repeating sawtooth-like pattern. Great for rhythmic effects.',
      category: 'Distortion',
    },
    {
      id: 'fractx',
      name: 'fract(x)',
      description: 'Extracts the fractional part of x, producing repeating patterns similar to mod.',
      category: 'Distortion',
    },
    {
      id: 'sincx',
      name: 'sin(x)/x',
      description: 'Sinc function, often used in filters. Produces a rounded central peak with side lobes.',
      category: 'Distortion',
    },
  
    // Symmetry and Inversion
    {
      id: 'negx',
      name: '-x',
      description: 'Inverts the waveform vertically. Flips positive and negative amplitudes.',
      category: 'Symmetry',
    },
    {
      id: 'oneminusx',
      name: '1 - x',
      description: 'Inverts both vertically and horizontally. Useful for phase flipping.',
      category: 'Symmetry',
    },
    {
      id: 'abs_sinx',
      name: 'abs(sin(x))',
      description: 'Rectified sine wave. Produces only positive values, useful for certain harmonics.',
      category: 'Symmetry',
    },
  
    // Combination Tricks
    {
      id: 'sin_sum',
      name: 'sin(x) + sin(2x)/2',
      description: 'Adds a harmonic to the sine wave, resulting in a brighter sound.',
      category: 'Combination',
    },
    {
      id: 'sin_modulated',
      name: 'sin(x) * sin(x^2)',
      description: 'Modulates a sine wave with a nonlinear curve. Great for gritty textures.',
      category: 'Combination',
    },
    {
      id: 'sinx_mult_x',
      name: 'sin(x) * x',
      description: 'Amplitude modulation of sine wave. Adds complexity as amplitude changes.',
      category: 'Combination',
    },
    {
      id: 'additive_sine',
      name: '(sin(x) + sin(2x) + sin(3x)) / 3',
      description: 'Classic additive synthesis formula. Creates a fuller, harmonic-rich wave.',
      category: 'Combination',
    },
  
    // Noise / Chaos
    {
      id: 'fract_sin_noise',
      name: 'fract(sin(x * 43758.5453))',
      description: 'Generates pseudorandom values, useful for noise and chaotic textures.',
      category: 'Noise',
    },
  ];