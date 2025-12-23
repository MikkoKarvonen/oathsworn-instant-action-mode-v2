export type SectionPart = {
  text: string
  type: 'story' | 'rule'
}

export type Chapter = {
  number: number
  name: string
  sections?: SectionPart[]
}

export const chapters: Chapter[] = [
  {
    number: 1,
    name: 'Chapter 1',
    sections: [
      {
        text: `Green mud sucks at your boots, every stride a challenge as you trudge through the rain. Your hands grip the thick iron cable of the Wire Road, pulled taut through rings sunken into the trunks of hideous trees. For days now, it has been the only evidence of humanity's existence in the Deepwood. You have lost one member of your group on the journey so far. The sound of the thrum as Samil was plucked from the Wire is still fresh in your mind.

The fortress town of Bastone looms before you, its ancient gray walls battered by the rain. People have been dying here and you have answered the call, under contract, to find out why. The Oathmark on your wrist grants you entry through the thick gates to a quarantine area manned by a grim-faced guard. "Oathsworn. Heard you were coming. We found more bodies last night. Make your mark and enter."`, type: 'story'
      }
      , {
        text: `WRITE A NAME FOR YOUR FREE COMPANY ON THE FREE COMPANY SHEET.
  
ALL OATHSWORN GAIN ONE PERMANENT COMBAT TOKEN (YOUR CHOICE) TO SHOW WHAT KIND OF FREE COMPANY YOU ARE. THIS MUST BE THE SAME FOR ALL OATHSWORN. MARK THIS ON YOUR CHARACTER SHEETS.`,
        type: 'rule'
      }, {
        text: `Beyond the portcullis, you encounter a street urchin named, Midge, who calls himself the 'Mayor of Bastone. He convinces you to hire him to act as your guide during your stay here.`,
        type: 'story'
      }, {
        text: `OPEN MYSTERY ENVELOPE 'A' AND PLACE ITS CONTENTS IN THE CENTER OF PLAY.

GAIN ALLY CARD 1 (MIDGE).`,
        type: 'rule'
      }, {
        text: `Midge escorts you to a small tavern, The Broken Oak, to secure lodging. "Pot's Peace!" a burly man behind the bar calls out, "The yams are fresh and the rum's dark as the Deepwood."

Another man chimes in, "Things are not fresh just because they are green Bram, especially if they're supposed to be yellow." He turns to you with a wry smile, "Greycane is the name. I'm the eyes and ears of this town."

"The mouth, more like," Bram adds. You enquire about the rash of murders and Greycane recommends you speak with a body collector who may have information. After stocking up on supplies, you head out to begin your search for him.`,
        type: 'story'
      }, {
        text: `YOU MAY START A TRADE WITH THE BANKSMITH AND APOTHECARY. AFTERWARD,

PERFORM A REASONING CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORN GAIN A REDRAW TOKEN FOR QUICKLY FOLLOWING THE LEADS.`,
        type: 'rule'
      }, {
        text: `Your investigation leads you to a ramshackle hut in The Burrows where you find the body collector with his hungry family. "You need words, we need food. Iron helps," he bargains.`,
        type: 'story'
      }, {
        text: `PERFORM A BARTERING CHECK (DIFFICULTY 7). BEFORE YOU DRAW, YOU CAN SPEND ANY AMOUNT OF IRON TO REDUCE THE DIFFICULTY OF THIS CHECK BY THE SAME AMOUNT.

FOR EXAMPLE, SPEND 1 TO REDUCE THE DIFFICULTY BY 1.

IF YOU SUCCEED, ALL OATHSWORN GAIN A +2 ANIMUS TOKEN FOR OBTAINING GOOD INFORMATION FROM THE BODY COLLECTOR AND FINDING YOUR TARGET QUICKLY.`,
        type: 'rule'
      }, {
        text: `"Not me you're looking for, I do the job proper," he says. "Jeffit's the one you want. He pays them guards to look the other way while he throws 'em right over the wall. I tell ya, that's what lures the monsters."

The body collector directs you to a guard tower on the outer wall of Bastone. Climbing the rain slicked stone steps of the tower, you approach a group of guards and call out to them through the dark, wet night. They know exactly why you have come, and what you are looking for. Fearing for their lives, and in an attempt to keep their secret safe they attack.`,
        type: 'story'
      }, {
        text: `PERFORM A ROUND OF COMBAT AGAINST DEFENSE 5. ALL OATHSWORN THAT CRITICAL DURING THE COMBAT GAIN AN EMPOWERED X3 TOKEN.`,
        type: 'rule'
      }, {
        text: `After you dispatch the last guard, you begin to search for signs of bodies discarded by the other body collector, Jeffit. During the search, you encounter another guard peering into the darkness below the wall. "Help her!" he cries out to you. "They've been throwing bodies off the wall for weeks now, but she's still alive!" As you look over the crenelations, you see a pack of rat-like creatures crawl from the Deepwood and drag a woman out of a pile of corpses below.`,
        type: 'story'
      }, {
        text: `PERFORM A REASONING CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORN GAIN A DEFENSE TOKEN AND MARK THE ENCOUNTER SPECIAL RULES BOARD BOX FOR CHAPTER 1 ON YOUR FREE COMPANY SHEET.`,
        type: 'rule'
      }, {
        text: `You know what the creatures are. These are just the pups, and their mother is likely nearby. The guard, Dane, joins you as you climb down the wall and give pursuit.`,
        type: 'story'
      }, {
        text: `GAIN ALLY CARD 3 (DANE). ALL OATHSWORN GAIN A REDRAW TOKEN.`,
        type: 'rule'
      }, {
        text: `You track the rats to a circular depression in the Deepwood and find the woman, torn and bloody before you. The rotten stench of death and decay assaults your senses as you glimpse the movement of a hulking shape stirring in the shadows. The massive body of a Broodmother steps into the clearing, her great head of rotten fur and gnawing teeth rolls toward you with ravenous hunger as her eyes meet yours.`,
        type: 'story'
      }, {
        text: `IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 1 AND TRIANGLE(△).

IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 1 AND TRIANGLE(△).`,
        type: 'rule'
      }, {
        text: `After the battle, you return to the relative comfort of The Broken Oak with the Broodmother's head as a trophy. Lord Davenish, the Lord of Bastone, sends you a small pouch of iron as a reward for slaying the beast and asks that you meet with him in the morning.`,
        type: 'story'
      }, {
        text: `IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 1 ON YOUR FREE COMPANY SHEET.

TALLY LEVEL, LOOT AND LOSSES.`,
        type: 'rule'
      }
    ]
  },
  {
    number: 2,
    name: 'Chapter 2',
    sections: [
      {
        text: `Green mud sucks at your boots, every stride a challenge as you trudge through the rain. Your hands grip the thick iron cable of the Wire Road, pulled taut through rings sunken into the trunks of hideous trees. For days now, it has been the only evidence of humanity's existence in the Deepwood. You have lost one member of your group on the journey so far. The sound of the thrum as Samil was plucked from the Wire is still fresh in your mind.
  The fortress town of Bastone looms before you, its ancient gray walls battered by the rain. People have been dying here and you have answered the call, under contract, to find out why. The Oathmark on your wrist grants you entry through the thick gates to a quarantine area manned by a grim-faced guard. "Oathsworn. Heard you were coming. We found more bodies last night. Make your mark and enter."`, type: 'story'
      }
    ]
  },
  {
    number: 3,
    name: 'Chapter 3',
    sections: [
      {
        text: `Green mud sucks at your boots, every stride a challenge as you trudge through the rain. Your hands grip the thick iron cable of the Wire Road, pulled taut through rings sunken into the trunks of hideous trees. For days now, it has been the only evidence of humanity's existence in the Deepwood. You have lost one member of your group on the journey so far. The sound of the thrum as Samil was plucked from the Wire is still fresh in your mind.
  The fortress town of Bastone looms before you, its ancient gray walls battered by the rain. People have been dying here and you have answered the call, under contract, to find out why. The Oathmark on your wrist grants you entry through the thick gates to a quarantine area manned by a grim-faced guard. "Oathsworn. Heard you were coming. We found more bodies last night. Make your mark and enter."`, type: 'story'
      }
    ]
  },
  {
    number: 4,
    name: 'Chapter 4',
    sections: [
      {
        text: `Green mud sucks at your boots, every stride a challenge as you trudge through the rain. Your hands grip the thick iron cable of the Wire Road, pulled taut through rings sunken into the trunks of hideous trees. For days now, it has been the only evidence of humanity's existence in the Deepwood. You have lost one member of your group on the journey so far. The sound of the thrum as Samil was plucked from the Wire is still fresh in your mind.
  The fortress town of Bastone looms before you, its ancient gray walls battered by the rain. People have been dying here and you have answered the call, under contract, to find out why. The Oathmark on your wrist grants you entry through the thick gates to a quarantine area manned by a grim-faced guard. "Oathsworn. Heard you were coming. We found more bodies last night. Make your mark and enter."`, type: 'story'
      }
    ]
  },
  {
    number: 5,
    name: 'Chapter 5',
    sections: [
      {
        text: `Green mud sucks at your boots, every stride a challenge as you trudge through the rain. Your hands grip the thick iron cable of the Wire Road, pulled taut through rings sunken into the trunks of hideous trees. For days now, it has been the only evidence of humanity's existence in the Deepwood. You have lost one member of your group on the journey so far. The sound of the thrum as Samil was plucked from the Wire is still fresh in your mind.
  The fortress town of Bastone looms before you, its ancient gray walls battered by the rain. People have been dying here and you have answered the call, under contract, to find out why. The Oathmark on your wrist grants you entry through the thick gates to a quarantine area manned by a grim-faced guard. "Oathsworn. Heard you were coming. We found more bodies last night. Make your mark and enter."`, type: 'story'
      }
    ]
  },
  {
    number: 6,
    name: 'Chapter 6',
    sections: [
      {
        text: `Green mud sucks at your boots, every stride a challenge as you trudge through the rain. Your hands grip the thick iron cable of the Wire Road, pulled taut through rings sunken into the trunks of hideous trees. For days now, it has been the only evidence of humanity's existence in the Deepwood. You have lost one member of your group on the journey so far. The sound of the thrum as Samil was plucked from the Wire is still fresh in your mind.
  The fortress town of Bastone looms before you, its ancient gray walls battered by the rain. People have been dying here and you have answered the call, under contract, to find out why. The Oathmark on your wrist grants you entry through the thick gates to a quarantine area manned by a grim-faced guard. "Oathsworn. Heard you were coming. We found more bodies last night. Make your mark and enter."`, type: 'story'
      }
    ]
  },
  {
    number: 7,
    name: 'Chapter 7',
    sections: [
      {
        text: `Green mud sucks at your boots, every stride a challenge as you trudge through the rain. Your hands grip the thick iron cable of the Wire Road, pulled taut through rings sunken into the trunks of hideous trees. For days now, it has been the only evidence of humanity's existence in the Deepwood. You have lost one member of your group on the journey so far. The sound of the thrum as Samil was plucked from the Wire is still fresh in your mind.
  The fortress town of Bastone looms before you, its ancient gray walls battered by the rain. People have been dying here and you have answered the call, under contract, to find out why. The Oathmark on your wrist grants you entry through the thick gates to a quarantine area manned by a grim-faced guard. "Oathsworn. Heard you were coming. We found more bodies last night. Make your mark and enter."`, type: 'story'
      }
    ]
  },
  {
    number: 8,
    name: 'Chapter 8',
    sections: [
      {
        text: `Green mud sucks at your boots, every stride a challenge as you trudge through the rain. Your hands grip the thick iron cable of the Wire Road, pulled taut through rings sunken into the trunks of hideous trees. For days now, it has been the only evidence of humanity's existence in the Deepwood. You have lost one member of your group on the journey so far. The sound of the thrum as Samil was plucked from the Wire is still fresh in your mind.
  The fortress town of Bastone looms before you, its ancient gray walls battered by the rain. People have been dying here and you have answered the call, under contract, to find out why. The Oathmark on your wrist grants you entry through the thick gates to a quarantine area manned by a grim-faced guard. "Oathsworn. Heard you were coming. We found more bodies last night. Make your mark and enter."`, type: 'story'
      }
    ]
  },
  {
    number: 9,
    name: 'Chapter 9',
    sections: [
      {
        text: `Green mud sucks at your boots, every stride a challenge as you trudge through the rain. Your hands grip the thick iron cable of the Wire Road, pulled taut through rings sunken into the trunks of hideous trees. For days now, it has been the only evidence of humanity's existence in the Deepwood. You have lost one member of your group on the journey so far. The sound of the thrum as Samil was plucked from the Wire is still fresh in your mind.
  The fortress town of Bastone looms before you, its ancient gray walls battered by the rain. People have been dying here and you have answered the call, under contract, to find out why. The Oathmark on your wrist grants you entry through the thick gates to a quarantine area manned by a grim-faced guard. "Oathsworn. Heard you were coming. We found more bodies last night. Make your mark and enter."`, type: 'story'
      }
    ]
  },
  {
    number: 10,
    name: 'Chapter 10',
    sections: [
      {
        text: `Green mud sucks at your boots, every stride a challenge as you trudge through the rain. Your hands grip the thick iron cable of the Wire Road, pulled taut through rings sunken into the trunks of hideous trees. For days now, it has been the only evidence of humanity's existence in the Deepwood. You have lost one member of your group on the journey so far. The sound of the thrum as Samil was plucked from the Wire is still fresh in your mind.
  The fortress town of Bastone looms before you, its ancient gray walls battered by the rain. People have been dying here and you have answered the call, under contract, to find out why. The Oathmark on your wrist grants you entry through the thick gates to a quarantine area manned by a grim-faced guard. "Oathsworn. Heard you were coming. We found more bodies last night. Make your mark and enter."`, type: 'story'
      }
    ]
  },
  {
    number: 11,
    name: 'Chapter 11',
    sections: [
      {
        text: `Green mud sucks at your boots, every stride a challenge as you trudge through the rain. Your hands grip the thick iron cable of the Wire Road, pulled taut through rings sunken into the trunks of hideous trees. For days now, it has been the only evidence of humanity's existence in the Deepwood. You have lost one member of your group on the journey so far. The sound of the thrum as Samil was plucked from the Wire is still fresh in your mind.
  The fortress town of Bastone looms before you, its ancient gray walls battered by the rain. People have been dying here and you have answered the call, under contract, to find out why. The Oathmark on your wrist grants you entry through the thick gates to a quarantine area manned by a grim-faced guard. "Oathsworn. Heard you were coming. We found more bodies last night. Make your mark and enter."`, type: 'story'
      }
    ]
  },
  {
    number: 12,
    name: 'Chapter 12',
    sections: [
      {
        text: `Green mud sucks at your boots, every stride a challenge as you trudge through the rain. Your hands grip the thick iron cable of the Wire Road, pulled taut through rings sunken into the trunks of hideous trees. For days now, it has been the only evidence of humanity's existence in the Deepwood. You have lost one member of your group on the journey so far. The sound of the thrum as Samil was plucked from the Wire is still fresh in your mind.
  The fortress town of Bastone looms before you, its ancient gray walls battered by the rain. People have been dying here and you have answered the call, under contract, to find out why. The Oathmark on your wrist grants you entry through the thick gates to a quarantine area manned by a grim-faced guard. "Oathsworn. Heard you were coming. We found more bodies last night. Make your mark and enter."`, type: 'story'
      }
    ]
  },
  {
    number: 13,
    name: 'Chapter 13',
    sections: [
      {
        text: `Green mud sucks at your boots, every stride a challenge as you trudge through the rain. Your hands grip the thick iron cable of the Wire Road, pulled taut through rings sunken into the trunks of hideous trees. For days now, it has been the only evidence of humanity's existence in the Deepwood. You have lost one member of your group on the journey so far. The sound of the thrum as Samil was plucked from the Wire is still fresh in your mind.
  The fortress town of Bastone looms before you, its ancient gray walls battered by the rain. People have been dying here and you have answered the call, under contract, to find out why. The Oathmark on your wrist grants you entry through the thick gates to a quarantine area manned by a grim-faced guard. "Oathsworn. Heard you were coming. We found more bodies last night. Make your mark and enter."`, type: 'story'
      }
    ]
  },
  {
    number: 14,
    name: 'Chapter 14',
    sections: [
      {
        text: `Green mud sucks at your boots, every stride a challenge as you trudge through the rain. Your hands grip the thick iron cable of the Wire Road, pulled taut through rings sunken into the trunks of hideous trees. For days now, it has been the only evidence of humanity's existence in the Deepwood. You have lost one member of your group on the journey so far. The sound of the thrum as Samil was plucked from the Wire is still fresh in your mind.
  The fortress town of Bastone looms before you, its ancient gray walls battered by the rain. People have been dying here and you have answered the call, under contract, to find out why. The Oathmark on your wrist grants you entry through the thick gates to a quarantine area manned by a grim-faced guard. "Oathsworn. Heard you were coming. We found more bodies last night. Make your mark and enter."`, type: 'story'
      }
    ]
  },
  {
    number: 15,
    name: 'Chapter 15',
    sections: [
      {
        text: `Green mud sucks at your boots, every stride a challenge as you trudge through the rain. Your hands grip the thick iron cable of the Wire Road, pulled taut through rings sunken into the trunks of hideous trees. For days now, it has been the only evidence of humanity's existence in the Deepwood. You have lost one member of your group on the journey so far. The sound of the thrum as Samil was plucked from the Wire is still fresh in your mind.
  The fortress town of Bastone looms before you, its ancient gray walls battered by the rain. People have been dying here and you have answered the call, under contract, to find out why. The Oathmark on your wrist grants you entry through the thick gates to a quarantine area manned by a grim-faced guard. "Oathsworn. Heard you were coming. We found more bodies last night. Make your mark and enter."`, type: 'story'
      }
    ]
  },
  {
    number: 16,
    name: 'Chapter 16',
    sections: [
      {
        text: `Green mud sucks at your boots, every stride a challenge as you trudge through the rain. Your hands grip the thick iron cable of the Wire Road, pulled taut through rings sunken into the trunks of hideous trees. For days now, it has been the only evidence of humanity's existence in the Deepwood. You have lost one member of your group on the journey so far. The sound of the thrum as Samil was plucked from the Wire is still fresh in your mind.
  The fortress town of Bastone looms before you, its ancient gray walls battered by the rain. People have been dying here and you have answered the call, under contract, to find out why. The Oathmark on your wrist grants you entry through the thick gates to a quarantine area manned by a grim-faced guard. "Oathsworn. Heard you were coming. We found more bodies last night. Make your mark and enter."`, type: 'story'
      }
    ]
  },
  {
    number: 17,
    name: 'Chapter 17',
    sections: [
      {
        text: `Green mud sucks at your boots, every stride a challenge as you trudge through the rain. Your hands grip the thick iron cable of the Wire Road, pulled taut through rings sunken into the trunks of hideous trees. For days now, it has been the only evidence of humanity's existence in the Deepwood. You have lost one member of your group on the journey so far. The sound of the thrum as Samil was plucked from the Wire is still fresh in your mind.
  The fortress town of Bastone looms before you, its ancient gray walls battered by the rain. People have been dying here and you have answered the call, under contract, to find out why. The Oathmark on your wrist grants you entry through the thick gates to a quarantine area manned by a grim-faced guard. "Oathsworn. Heard you were coming. We found more bodies last night. Make your mark and enter."`, type: 'story'
      }
    ]
  },
  {
    number: 18,
    name: 'Chapter 18',
    sections: [
      {
        text: `Green mud sucks at your boots, every stride a challenge as you trudge through the rain. Your hands grip the thick iron cable of the Wire Road, pulled taut through rings sunken into the trunks of hideous trees. For days now, it has been the only evidence of humanity's existence in the Deepwood. You have lost one member of your group on the journey so far. The sound of the thrum as Samil was plucked from the Wire is still fresh in your mind.
  The fortress town of Bastone looms before you, its ancient gray walls battered by the rain. People have been dying here and you have answered the call, under contract, to find out why. The Oathmark on your wrist grants you entry through the thick gates to a quarantine area manned by a grim-faced guard. "Oathsworn. Heard you were coming. We found more bodies last night. Make your mark and enter."`, type: 'story'
      }
    ]
  },
  {
    number: 19,
    name: 'Chapter 19',
    sections: [
      {
        text: `Green mud sucks at your boots, every stride a challenge as you trudge through the rain. Your hands grip the thick iron cable of the Wire Road, pulled taut through rings sunken into the trunks of hideous trees. For days now, it has been the only evidence of humanity's existence in the Deepwood. You have lost one member of your group on the journey so far. The sound of the thrum as Samil was plucked from the Wire is still fresh in your mind.
  The fortress town of Bastone looms before you, its ancient gray walls battered by the rain. People have been dying here and you have answered the call, under contract, to find out why. The Oathmark on your wrist grants you entry through the thick gates to a quarantine area manned by a grim-faced guard. "Oathsworn. Heard you were coming. We found more bodies last night. Make your mark and enter."`, type: 'story'
      }
    ]
  },
  {
    number: 20,
    name: 'Chapter 20',
    sections: [
      {
        text: `Green mud sucks at your boots, every stride a challenge as you trudge through the rain. Your hands grip the thick iron cable of the Wire Road, pulled taut through rings sunken into the trunks of hideous trees. For days now, it has been the only evidence of humanity's existence in the Deepwood. You have lost one member of your group on the journey so far. The sound of the thrum as Samil was plucked from the Wire is still fresh in your mind.
  The fortress town of Bastone looms before you, its ancient gray walls battered by the rain. People have been dying here and you have answered the call, under contract, to find out why. The Oathmark on your wrist grants you entry through the thick gates to a quarantine area manned by a grim-faced guard. "Oathsworn. Heard you were coming. We found more bodies last night. Make your mark and enter."`, type: 'story'
      }
    ]
  },
  {
    number: 21,
    name: 'Chapter 21',
    sections: [
      {
        text: `Green mud sucks at your boots, every stride a challenge as you trudge through the rain. Your hands grip the thick iron cable of the Wire Road, pulled taut through rings sunken into the trunks of hideous trees. For days now, it has been the only evidence of humanity's existence in the Deepwood. You have lost one member of your group on the journey so far. The sound of the thrum as Samil was plucked from the Wire is still fresh in your mind.
  The fortress town of Bastone looms before you, its ancient gray walls battered by the rain. People have been dying here and you have answered the call, under contract, to find out why. The Oathmark on your wrist grants you entry through the thick gates to a quarantine area manned by a grim-faced guard. "Oathsworn. Heard you were coming. We found more bodies last night. Make your mark and enter."`, type: 'story'
      }
    ]
  },
]


