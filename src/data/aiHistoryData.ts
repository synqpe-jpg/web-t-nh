import { Era, Milestone, Pioneer, GlossaryTerm } from '../types';

export const eras: Era[] = [
  {
    id: 'foundations',
    title: 'The Foundations & Prehistory',
    timeRange: 'Up to 1950',
    description: 'The seeds of mechanical thinking, from philosophical foundations to Alan Turing’s formal mathematical models of computation.',
    accentColor: 'amber-500',
    bgGradient: 'from-amber-950/20 to-stone-900',
  },
  {
    id: 'birth',
    title: 'The Birth & Golden Years',
    timeRange: '1950 - 1974',
    description: 'The coining of the term "Artificial Intelligence" at the Dartmouth Workshop and early breakthroughs in symbolic logic and early chatbot programs.',
    accentColor: 'indigo-500',
    bgGradient: 'from-indigo-950/20 to-stone-900',
  },
  {
    id: 'winter-1',
    title: 'The First AI Winter',
    timeRange: '1974 - 1980',
    description: 'A period of severe criticism, computational roadblocks, and drastic reductions in government research funding.',
    accentColor: 'sky-500',
    bgGradient: 'from-sky-950/20 to-stone-900',
  },
  {
    id: 'boom',
    title: 'The Boom & Expert Systems',
    timeRange: '1980 - 1987',
    description: 'The commercial rise of knowledge-based "expert systems" and the resurgence of multi-layer neural network algorithms.',
    accentColor: 'emerald-500',
    bgGradient: 'from-emerald-950/20 to-stone-900',
  },
  {
    id: 'winter-2',
    title: 'The Second AI Winter',
    timeRange: '1987 - 1993',
    description: 'The collapse of specialized AI hardware markets and frustration with the brittle nature of rule-based systems.',
    accentColor: 'blue-500',
    bgGradient: 'from-blue-950/20 to-stone-900',
  },
  {
    id: 'narrow-ai',
    title: 'The Connectionist Renaissance',
    timeRange: '1993 - 2011',
    description: 'A shift towards probabilism, data-driven approaches, chess computer victories, and stealth integration in daily technologies.',
    accentColor: 'violet-500',
    bgGradient: 'from-violet-950/20 to-stone-900',
  },
  {
    id: 'deep-learning',
    title: 'The Deep Learning Wave',
    timeRange: '2011 - 2020',
    description: 'The massive training of deep convolutional neural networks on GPUs, transforming computer vision, translation, and games like Go.',
    accentColor: 'rose-500',
    bgGradient: 'from-rose-950/20 to-stone-900',
  },
  {
    id: 'generative-ai',
    title: 'The Generative AI Era & LLMs',
    timeRange: '2020 - Present',
    description: 'The emergence of massive transformer models, conversational interfaces like ChatGPT, and multimodal reasoning systems.',
    accentColor: 'teal-500',
    bgGradient: 'from-teal-950/20 to-stone-900',
  },
];

export const milestones: Milestone[] = [
  {
    id: 'turing-paper',
    year: '1950',
    title: 'Alan Turing Publishes "Computing Machinery and Intelligence"',
    eraId: 'foundations',
    description: 'Alan Turing proposed the "Imitation Game" (now known as the Turing Test) to evaluate a machine’s ability to exhibit intelligent behavior indistinguishable from a human.',
    details: 'This crucial paper bypassed philosophical debates about "whether machines can think" by presenting a practical, operational standard: if a human evaluator cannot tell a machine and a human apart in a text-only conversation, the machine qualifies as intelligent.',
    impactScore: 5,
    tags: ['Turing Test', 'Philosophy', 'Foundations'],
  },
  {
    id: 'dartmouth',
    year: '1956',
    title: 'The Dartmouth Summer Research Project on AI',
    eraId: 'birth',
    description: 'Organized by John McCarthy, Marvin Minsky, Nathaniel Rochester, and Claude Shannon, this workshop was where the term "Artificial Intelligence" was officially coined.',
    details: 'McCarthy proposed the name to distinguish the group’s work from "cybernetics." The proposal famously asserted: "every aspect of learning or any other feature of intelligence can in principle be so precisely described that a machine can be made to simulate it."',
    impactScore: 5,
    tags: ['Terminology', 'Workshop', 'Dartmouth'],
  },
  {
    id: 'perceptrons-early',
    year: '1958',
    title: 'Frank Rosenblatt invents the Perceptron',
    eraId: 'birth',
    description: 'Rosenblatt designed the Perceptron, the earliest form of artificial neural network, on a custom hardware machine at Cornell Aeronautical Laboratory.',
    details: 'Funded by the US Office of Naval Research, the Perceptron was heralded as the beginning of a machine that could walk, talk, and see. However, it was mathematically limited to linearly separable functions, a limitation that later caused significant controversy.',
    impactScore: 4,
    tags: ['Neural Networks', 'Hardware', 'Perceptron'],
  },
  {
    id: 'eliza',
    year: '1966',
    title: 'Joseph Weizenbaum Creates ELIZA',
    eraId: 'birth',
    description: 'ELIZA was one of the first Natural Language Processing computer programs, acting as an empathetic psychotherapist by reflecting user statements back at them.',
    details: 'Using simple pattern-matching rules, ELIZA fooled many users into believing it possessed genuine feelings and understanding. This phenomenon—where people anthropomorphize machines based on trivial scripts—became known as the "ELIZA Effect."',
    impactScore: 4,
    tags: ['NLP', 'Chatbot', 'ELIZA Effect'],
  },
  {
    id: 'perceptrons-book',
    year: '1969',
    title: 'Minsky and Papert Publish "Perceptrons"',
    eraId: 'birth',
    description: 'Marvin Minsky and Seymour Papert published a rigorous mathematical analysis of single-layer neural networks, highlighting crucial limitations.',
    details: 'They proved that single-layer perceptrons could not compute basic functions like Exclusive OR (XOR). Although they didn’t intend to stop neural-network research entirely, this book led to a steep decline in neural network funding as the field shifted to symbolic representation.',
    impactScore: 4,
    tags: ['Criticism', 'Neural Networks', 'Linguistic Logic'],
  },
  {
    id: 'lighthill-report',
    year: '1973',
    title: 'The Lighthill Report Triggers the First AI Winter',
    eraId: 'winter-1',
    description: 'Professor Sir James Lighthill presented a devastating evaluation of AI research in the UK, characterizing AI accomplishments as "completely disappointing."',
    details: 'Lighthill criticized the "combinatorial explosion"—where the computational capacity needed to solve problems grows exponentially—rendering early AI models useless for real-world scenarios. This led to a near-total withdrawal of AI research funding by the British and US governments.',
    impactScore: 5,
    tags: ['Funding', 'Government Report', 'Winter'],
  },
  {
    id: 'expert-systems',
    year: '1980',
    title: 'The Commercial Rise of Expert Systems',
    eraId: 'boom',
    description: 'Organizations adopted "Expert Systems" (like XCON, developed at Carnegie Mellon University for DEC), which relied on explicit rules to evaluate complex logic.',
    details: 'Instead of searching for general answers, expert systems encoded specialized human knowledge into a repository of "IF-THEN" rules. By 1985, billions of dollars were being spent on these systems globally, marking a period of industrial commercialization.',
    impactScore: 4,
    tags: ['Expert Systems', 'Enterprise AI', 'Logic Rules'],
  },
  {
    id: 'backprop',
    year: '1986',
    title: 'Popularization of the Backpropagation Algorithm',
    eraId: 'boom',
    description: 'David Rumelhart, Geoffrey Hinton, and Ronald Williams published paper demonstrating that backpropagation could train multi-layered neural networks.',
    details: 'By showing that deep representations could be adjusted to minimize errors, this landmark paper solved the single-layer limitations highlighted in 1969, giving neural networks a sturdy mathematical framework and initiating a connectionist renaissance.',
    impactScore: 5,
    tags: ['Backpropagation', 'Math', 'Neural Networks'],
  },
  {
    id: 'lisp-collapse',
    year: '1987',
    title: 'Collapse of the Specialized Lisp Machine Market',
    eraId: 'winter-2',
    description: 'The specialized computer hardware designed to run LISP (the premier AI programming language) suffered a catastrophic market collapse.',
    details: 'As standard, generalized workstations (from Sun Microsystems, IBM, and Intel-based PCs) became significantly faster and cheaper, the expensive, custom Lisp machines became obsolete almost overnight. This brought a commercial collapse to early AI enterprises.',
    impactScore: 4,
    tags: ['Market Collapse', 'Lisp', 'Hardware'],
  },
  {
    id: 'darpa-winter-2',
    year: '1990',
    title: 'Deepening of the Second AI Winter',
    eraId: 'winter-2',
    description: 'Major state agencies cut funding for symbolic AI and neural systems after realizing expert systems were highly brittle and expensive to maintain.',
    details: 'Known as the Second Winter, it became clear that updating thousands of hardcoded "IF-THEN" rules manually was unsustainable when real-world conditions shifted. Enthusiasm evaporated, and AI researcher positions dried up.',
    impactScore: 4,
    tags: ['Skepticism', 'Funding Cuts', 'Expert Systems'],
  },
  {
    id: 'deep-blue',
    year: '1997',
    title: 'IBM Deep Blue Defeats Garry Kasparov',
    eraId: 'narrow-ai',
    description: 'IBM’s supercomputer, Deep Blue, made global headlines by defeating World Chess Champion Garry Kasparov in a highly publicized six-game match.',
    details: 'Deep Blue used specialized hardware and advanced heuristic search algorithms to calculate up to 200 million possible chess positions per second. While criticized as "brute-force" rather than "real thinking," it was a massive milestone for game theory and physical computation.',
    impactScore: 5,
    tags: ['Chess', 'Heuristics', 'Supercomputing'],
  },
  {
    id: 'roomba',
    year: '2002',
    title: 'iRobot Launches the Roomba',
    eraId: 'narrow-ai',
    description: 'The standard multi-directional robotic vacuum cleaner became the first highly successful commercial robotic device in millions of homes worldwide.',
    details: 'While simple, the Roomba showed that algorithmic pathfinding, sensory-guided collision prevention, and mechanical behaviors could accomplish reliable tasks without needing complex cognitive consciousness.',
    impactScore: 3,
    tags: ['Robotics', 'Consumer Electronics'],
  },
  {
    id: 'watson-jeopardy',
    year: '2011',
    title: 'IBM Watson Wins Jeopardy!',
    eraId: 'narrow-ai',
    description: 'IBM Watson competed in the TV quiz show Jeopardy! and defeated legends Ken Jennings and Brad Rutter, demonstrating advanced retrieval and processing capabilities.',
    details: 'Watson parsed natural language questions, analyzed massive unstructured offline knowledge bases (including Wikipedia), generated candidate answers, and assigned confidence scores in less than three seconds.',
    impactScore: 4,
    tags: ['NLP', 'Jeopardy', 'Knowledge Base'],
  },
  {
    id: 'alexnet',
    year: '2012',
    title: 'AlexNet Triumphs at ImageNet Challenge',
    eraId: 'deep-learning',
    description: 'Alex Krizhevsky, Ilya Sutskever, and Geoffrey Hinton designed a deep Convolutional Neural Network (CNN) called AlexNet, winning ImageNet by a massive margin.',
    details: 'AlexNet achieved an error rate of 15.3%, nearly 11 percentage points lower than the runner-up. Trained on consumer GPUs, this event demonstrated the absolute superiority of deep learning over human-handcoded computer vision pipelines, igniting the modern Deep Learning wave.',
    impactScore: 5,
    tags: ['AlexNet', 'Deep Learning', 'Computer Vision', 'GPUs'],
  },
  {
    id: 'alphago',
    year: '2016',
    title: 'DeepMind’s AlphaGo Beats Grandmaster Lee Sedol',
    eraId: 'deep-learning',
    description: 'A reinforcement learning model developed by Google DeepMind beat 18-time world Go champion Lee Sedol 4-1 in a historic match in Seoul.',
    details: 'Go features search-tree complexity larger than the number of atoms in the observable universe, long believed to require human intuition. AlphaGo combined Deep Neural Networks (to evaluate board value and select moves) with Monte Carlo Tree Search (MCTS), shocking computer science pioneers.',
    impactScore: 5,
    tags: ['DeepMind', 'AlphaGo', 'Reinforcement Learning', 'Go'],
  },
  {
    id: 'transformer',
    year: '2017',
    title: 'Introduction of the Transformer Architecture',
    eraId: 'deep-learning',
    description: 'Eight Google Researchers published the transformative paper "Attention Is All You Need", introducing the self-attention transformer network.',
    details: 'This architecture removed the need for recurrent (RNN/LSTM) loops in sequential model tasks, allowing massive parallel processing of text corpora. This design became the foundational chassis for almost all modern Large Language Models (LLMs).',
    impactScore: 5,
    tags: ['Transformer', 'Self-Attention', 'Research', 'Vast Acceleration'],
  },
  {
    id: 'gpt3',
    year: '2020',
    title: 'OpenAI Releases GPT-3',
    eraId: 'deep-learning',
    description: 'OpenAI trained a generative pre-trained transformer model boasting 175 billion hyperparameters, showcasing unprecedented few-shot text creation.',
    details: 'GPT-3 proved that simply scaling transformer parameters and data training set size yielded surprising emergent capabilities—such as writing clean computer code, basic logical deduction, and mimicking diverse writing styles without specific finetuning.',
    impactScore: 4,
    tags: ['GPT-3', 'Scaling Laws', 'Few-Shot Learning'],
  },
  {
    id: 'chatgpt-explosion',
    year: '2022',
    title: 'ChatGPT Launches, Igniting Generative AI Revolution',
    eraId: 'generative-ai',
    description: 'OpenAI launched ChatGPT, bringing a polished, highly aligned conversational front-end based on InstructGPT to millions of users in days.',
    details: 'By using Reinforcement Learning from Human Feedback (RLHF), the model adapted from completing text segments to serving as an obedient, highly conversational assistant, democratizing AI access and fundamentally changing digital industries.',
    impactScore: 5,
    tags: ['ChatGPT', 'RLHF', 'Democratization'],
  },
  {
    id: 'multimodal-era',
    year: '2024',
    title: 'The Rise of Multimodal and Agentic Systems',
    eraId: 'generative-ai',
    description: 'State-of-the-art models (like Google’s Gemini, OpenAI’s GPT-4o, and Claude 3.5 Sonnet) expanded to handle audio, video, code, and text natively.',
    details: 'AI transformed from answering static queries to executing long-horizon agentic workflows—independently reading project directories, refactoring complex code bases, evaluating multimodal sensor data, and planning dynamic actions.',
    impactScore: 5,
    tags: ['Multimodal', 'Agents', 'Gemini', 'Generative AI'],
  },
];

export const pioneers: Pioneer[] = [
  {
    id: 'turing',
    name: 'Alan Turing',
    period: '1912 - 1954',
    title: 'The Father of Theoretical AI',
    biography: 'A genius British mathematician, logician, and codebreaker who famously cracked the German Enigma machine during WWII. Turing laid the theoretical foundation for all digital computation.',
    keyContributions: [
      'Invented the concept of the Universal Turing Machine (the precursor to modern computers).',
      'Created the Turing Test to establish a testable standard to measure machine intelligence.',
      'Published early guidelines on machine learning and heuristic search theories.'
    ],
    famousQuote: 'We can only see a short distance ahead, but we can see plenty there that needs to be done.'
  },
  {
    id: 'mccarthy',
    name: 'John McCarthy',
    period: '1927 - 2011',
    title: 'The Coiner of "Artificial Intelligence"',
    biography: 'An influential American computer scientist who co-founded the Dartmouth workshop and established the MIT and Stanford Artificial Intelligence Laboratories.',
    keyContributions: [
      'Coined the term "Artificial Intelligence" in 1955 to describe the proposed machine studies.',
      'Developed LISP, which remained the dominant programming language for AI development for decades.',
      'Pioneered time-sharing systems, which allowed multiple developers to share central supercomputers.'
    ],
    famousQuote: 'As soon as it works, no one calls it AI anymore.'
  },
  {
    id: 'minsky',
    name: 'Marvin Minsky',
    period: '1927 - 2016',
    title: 'The Cognitive Architect',
    biography: 'A brilliant and outspoken polymath who co-founded the MIT Artificial Intelligence Laboratory and authored fundamental texts on cognitive psychology and neural models.',
    keyContributions: [
      'Developed highly early mechanical robotic arms, scanning microscopes, and computational optical track systems.',
      'Wrote "Perceptrons" (with Seymour Papert), proving the limits of single-layered connectionist nets.',
      'Formulated the "Society of Mind" theory, describing human intelligence as an interaction of numerous simple, non-intelligent agents.'
    ],
    famousQuote: 'You don’t really understand something until you understand it in more than one way.'
  },
  {
    id: 'hinton',
    name: 'Geoffrey Hinton',
    period: 'Active',
    title: 'The Godfather of Deep Learning',
    biography: 'A British-Canadian cognitive psychologist and computer scientist who spent decades defending neural networks when the computational world turned its back on connectionism.',
    keyContributions: [
      'Popularized the backpropagation training algorithm to customize deep multi-layered neural networks.',
      'Co-invented Boltzmann machines, Deep Belief Networks, and capsule neural models.',
      'Co-designed AlexNet in 2012, which conclusively kicked off the global modern deep learning revolution'
    ],
    famousQuote: 'Our brains have 100 trillion connections. Standard models only have a few billion. There is plenty of room to grow.'
  },
  {
    id: 'lecun',
    name: 'Yann LeCun',
    period: 'Active',
    title: 'The Convolutional Pioneer',
    biography: 'A brilliant French-American computer scientist, neural net designer, and VP & Chief AI Scientist at Meta. He co-won the Turing Award in 2018 along with Hinton and Bengio.',
    keyContributions: [
      'Invented the LeNet architecture, an early convolutional network capable of reading digit checks automatically.',
      'Popularized Convolutional Neural Networks (CNNs), the cornerstone of modern computer vision.',
      'Pioneered self-supervised learning paradigms to teach machines without manual human labeling.'
    ],
    famousQuote: 'If you want computers to be smart, you have to let them explore, make mistakes, and self-train, just like babies.'
  }
];

export const glossary: GlossaryTerm[] = [
  {
    term: 'Turing Test',
    definition: 'A test of a machine’s ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human. The evaluator interacts purely via text.',
    eraContext: 'Foundations (1950)'
  },
  {
    term: 'Connectionism',
    definition: 'An approach to artificial intelligence that models mental and behavioral phenomena using networks of simple, interconnected units called artificial neurons.',
    eraContext: 'Birth & Deep Learning Renaissance'
  },
  {
    term: 'AI Winter',
    definition: 'A cold spell of general public skepticism, commercial failure, and severe funding cutbacks targeting artificial intelligence research.',
    eraContext: '1974 - 1980 & 1987 - 1993'
  },
  {
    term: 'Expert System',
    definition: 'A computer program that simulates the judgment and behavior of a human or an organization that has expert knowledge in a particular field, relying on IF-THEN rules.',
    eraContext: 'Corporate boom of 1980s'
  },
  {
    term: 'Backpropagation',
    definition: 'The mathematical algorithm used to train neural networks by calculating the gradient of the loss function with respect to each weight, propogating errors backward.',
    eraContext: 'Popularized in 1986'
  },
  {
    term: 'Convolutional Neural Network (CNN)',
    definition: 'A specialized deep neural network designed to process grid-structured data like images, utilizing spatial filters (convolutions) to learn features hierarchically.',
    eraContext: '1990s research, exploded in 2012'
  },
  {
    term: 'Transformer',
    definition: 'A deep learning model architecture that uses the self-attention mechanism, permitting parallelized processing of context and sequence tokens natively.',
    eraContext: '2017 - Present'
  },
  {
    term: 'Reinforcement Learning from Human Feedback (RLHF)',
    definition: 'A technique that uses human evaluations of agent outputs to align models with human intent, safety guidelines, and conversational expectations.',
    eraContext: '2020 - Present'
  }
];
