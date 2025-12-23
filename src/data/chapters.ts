export type SectionPart = {
  text: string;
  type: "story" | "rule";
};
export type Chapter = {
  number: number;
  name: string;
  sections: SectionPart[];
};
export const chapters: Chapter[] = [
  {
    number: 1,
    name: "Chapter 1",
    sections: [
      {
        text: `Green mud sucks at your boots, every stride a challenge as you trudge through the rain. Your hands grip the thick iron cable of the Wire Road, pulled taut through rings sunken into the trunks of hideous trees. For days now, it has been the only evidence of humanity's existence in the Deepwood. You have lost one member of your group on the journey so far. The sound of the thrum as Samil was plucked from the Wire is still fresh in your mind.

The fortress town of Bastone looms before you, its ancient gray walls battered by the rain. People have been dying here and you have answered the call, under contract, to find out why. The Oathmark on your wrist grants you entry through the thick gates to a quarantine area manned by a grim-faced guard. "Oathsworn. Heard you were coming. We found more bodies last night. Make your mark and enter."`,
        type: "story",
      },
      {
        text: `WRITE A NAME FOR YOUR FREE COMPANY ON THE FREE COMPANY SHEET.

ALL OATHSWORN GAIN ONE PERMANENT COMBAT TOKEN (YOUR CHOICE) TO SHOW WHAT KIND OF FREE COMPANY YOU ARE. THIS MUST BE THE SAME FOR ALL OATHSWORN. MARK THIS ON YOUR CHARACTER SHEETS.`,
        type: "rule",
      },
      {
        text: `Beyond the portcullis, you encounter a street urchin named, Midge, who calls himself the 'Mayor of Bastone. He convinces you to hire him to act as your guide during your stay here.`,
        type: "story",
      },
      {
        text: `OPEN MYSTERY ENVELOPE 'A' AND PLACE ITS CONTENTS IN THE CENTER OF PLAY.

GAIN ALLY CARD 1 (MIDGE).`,
        type: "rule",
      },
      {
        text: `Midge escorts you to a small tavern, The Broken Oak, to secure lodging. "Pot's Peace!" a burly man behind the bar calls out, "The yams are fresh and the rum's dark as the Deepwood."

Another man chimes in, "Things are not fresh just because they are green Bram, especially if they're supposed to be yellow." He turns to you with a wry smile, "Greycane is the name. I'm the eyes and ears of this town."

"The mouth, more like," Bram adds. You enquire about the rash of murders and Greycane recommends you speak with a body collector who may have information. After stocking up on supplies, you head out to begin your search for him.`,
        type: "story",
      },
      {
        text: `YOU MAY START A TRADE WITH THE BANKSMITH AND APOTHECARY. AFTERWARD,

PERFORM A REASONING CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORN GAIN A REDRAW TOKEN FOR QUICKLY FOLLOWING THE LEADS.`,
        type: "rule",
      },
      {
        text: `Your investigation leads you to a ramshackle hut in The Burrows where you find the body collector with his hungry family. "You need words, we need food. Iron helps," he bargains.`,
        type: "story",
      },
      {
        text: `PERFORM A BARTERING CHECK (DIFFICULTY 7). BEFORE YOU DRAW, YOU CAN SPEND ANY AMOUNT OF IRON TO REDUCE THE DIFFICULTY OF THIS CHECK BY THE SAME AMOUNT.

FOR EXAMPLE, SPEND 1 TO REDUCE THE DIFFICULTY BY 1.

IF YOU SUCCEED, ALL OATHSWORN GAIN A +2 ANIMUS TOKEN FOR OBTAINING GOOD INFORMATION FROM THE BODY COLLECTOR AND FINDING YOUR TARGET QUICKLY.`,
        type: "rule",
      },
      {
        text: `"Not me you're looking for, I do the job proper," he says. "Jeffit's the one you want. He pays them guards to look the other way while he throws 'em right over the wall. I tell ya, that's what lures the monsters."

The body collector directs you to a guard tower on the outer wall of Bastone. Climbing the rain slicked stone steps of the tower, you approach a group of guards and call out to them through the dark, wet night. They know exactly why you have come, and what you are looking for. Fearing for their lives, and in an attempt to keep their secret safe they attack.`,
        type: "story",
      },
      {
        text: `PERFORM A ROUND OF COMBAT AGAINST DEFENSE 5.

ALL OATHSWORN THAT CRITICAL DURING THE COMBAT GAIN AN EMPOWERED X3 TOKEN.`,
        type: "rule",
      },
      {
        text: `After you dispatch the last guard, you begin to search for signs of bodies discarded by the other body collector, Jeffit. During the search, you encounter another guard peering into the darkness below the wall. "Help her!" he cries out to you. "They've been throwing bodies off the wall for weeks now, but she's still alive!" As you look over the crenelations, you see a pack of rat-like creatures crawl from the Deepwood and drag a woman out of a pile of corpses below.`,
        type: "story",
      },
      {
        text: `PERFORM A REASONING CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORN GAIN A DEFENSE TOKEN AND MARK THE ENCOUNTER SPECIAL RULES BOARD BOX FOR CHAPTER 1 ON YOUR FREE COMPANY SHEET.`,
        type: "rule",
      },
      {
        text: `You know what the creatures are. These are just the pups, and their mother is likely nearby. The guard, Dane, joins you as you climb down the wall and give pursuit.`,
        type: "story",
      },
      {
        text: `GAIN ALLY CARD 3 (DANE).

ALL OATHSWORN GAIN A REDRAW TOKEN.`,
        type: "rule",
      },
      {
        text: `You track the rats to a circular depression in the Deepwood and find the woman, torn and bloody before you. The rotten stench of death and decay assaults your senses as you glimpse the movement of a hulking shape stirring in the shadows. The massive body of a Broodmother steps into the clearing, her great head of rotten fur and gnawing teeth rolls toward you with ravenous hunger as her eyes meet yours.`,
        type: "story",
      },
      {
        text: `IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 1 AND TRIANGLE(△).

IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 1 AND TRIANGLE(△).`,
        type: "rule",
      },
      {
        text: `After the battle, you return to the relative comfort of The Broken Oak with the Broodmother's head as a trophy. Lord Davenish, the Lord of Bastone, sends you a small pouch of iron as a reward for slaying the beast and asks that you meet with him in the morning.`,
        type: "story",
      },
      {
        text: `GAIN 8 IRON.

IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 1 ON YOUR FREE COMPANY SHEET.

TALLY LEVEL, LOOT AND LOSSES.`,
        type: "rule",
      },
    ],
  },
  {
    number: 2,
    name: "Chapter 2",
    sections: [
      {
        text: `Thistle vines tear at your arms as you rush through the soggy underbrush, desperate to distance yourselves from the encroaching beast. Samil catches up to you, last in line as always. "It's gone," he says. A moment later, you hear the plucked thrum as Samil is ripped from the Wire by a shadow with orange eyes.`,
        type: "story",
      },
      {
        text: `ALL OATHSWORN PERFORM A SURVIVAL CHECK (DIFFICULTY 4). ALL THAT SUCCEED GAIN A BATTLEFLOW TOKEN. ALL THAT FAIL, LOSE 1 HIT POINT.`,
        type: "rule",
      },
      {
        text: `You dive for cover, suddenly awake in your straw mattress at The Broken Oak. The nightmare fades as you rise from your bed, bathed in sweat. One look at your groupmates confirms they experienced nightmares as well. Gathering your gear, you head downstairs to the tap room and are joined by Greycane for breakfast. He notices your unsettled demeanor and asks if you have experienced strange dreams lately. Apparently, you are not the only ones in the city having them. "Some go to sleep, never to wake," he tells you.`,
        type: "story",
      },
      {
        text: `OPEN MYSTERY ENVELOPE 'A' AND PLACE ITS CONTENTS IN THE CENTER OF PLAY.`,
        type: "rule",
      },
      {
        text: `After your morning meal, you are escorted to the Palace where Lord Davenish wastes no time requisitioning your aid in apprehending a local ult leader called, 'The Piper', whose followers have been attacking guards and robbing shops. If the criminal is not stopped soon, Davenish ears there will be blood in the streets. Apparently, The Piper's followers mark the sites of their crimes with two orange circles, which ome have taken to calling, 'The Eyes. Armed with this information, you urn to leave but immediately pause. Looking at you, through one of the alace windows is Samil, dead comrade. You rush to the window, but find e is gone. Not knowing what to make of it, you get back to the task at and and head to the Banksmith for supplies.`,
        type: "story",
      },
      { text: `YOU MAY START A TRADE WITH THE BANKSMITH.`, type: "rule" },
      {
        text: `As you conduct business with Gamel, the Banksmith, he asks if anyone has een his son. Gamel proceeds to tell that you his son, Tam, has gone issing and asks to join your group. You allow him to do so, suspecting he boy's disappearance could be connected to this business with The Piper.`,
        type: "story",
      },
      { text: `GAIN ALLY CARD 6 (GAMEL).`, type: "rule" },
      {
        text: `Fully equipped, your party heads out into the city in search of any range circles The Piper has left behind.`,
        type: "story",
      },
      {
        text: `PERFORM A SEARCH CHECK (DIFFICULTY 3). IF YOU SUCCEED, ALL OATHSWORN GAIN A REDRAW TOKEN FOR FINDING THE EYES QUICKLY.`,
        type: "rule",
      },
      {
        text: `You find the strange circles all over the city, including on the wall of he Apothecary's hut, where a rabble of angry citizens has gathered to arass the owner, Lyceen. They accuse her of being a witch and say she s responsible for strange occurrences around the city. You have itnessed plenty of witch hunts in your days, but rarely do they ctually expose a witch. Not wanting this to get out of hand, you isperse the crowd.`,
        type: "story",
      },
      { text: `YOU MAY START A TRADE WITH APOTHECARY.`, type: "rule" },
      {
        text: `The trail of evidence ultimately leads you to an empty well in a poor ection of the city. Inside the well, you find a series of handholds hich you use to climb down into the darkness. At the bottom, a series f tunnels lead to a large chamber where thousands of orange eyes have een scrawled onto the walls, floor and ceiling. Your arrival startles a an standing in the corner of the room. As he turns to face you, his yes glow a malefic orange color. The man quickly slips down a side unnel and you bolt after him in pursuit.`,
        type: "story",
      },
      {
        text: `PERFORM A SPEED CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORN GAIN AN EMPOWERED X3 TOKEN AS YOU ALMOST CATCH UP TO HIM.`,
        type: "rule",
      },
      {
        text: `Your chase through the twisting tunnels ends at a tattered rope ladder. Climbing the ladder, you come to the top of a section of the city wall here you find the man, who you now deduce to be The Piper. Standing on he ledge beside him, you see a familiar figure - Samil. You watch as our dead friend whispers something into the man's ear. As if following is command, The Piper walks off the ledge and in a blink, he and Samil re gone. You rush over, and look to the ground below, where you find The Piper impaled on the spikes at the base of the wall. Suddenly, an immense, hairy arm reaches from the Deepwood and plucks the body off the spikes. Without a moment's hesitation, you scale down the weathered city wall and follow the trail of blood into the cursed woods.`,
        type: "story",
      },
      {
        text: `ALL OATHSWORN PERFORM A SURVIVAL CHECK (DIFFICULTY 5). ALL THAT FAIL LOSE 1 HIT POINT.`,
        type: "rule",
      },
      {
        text: `The hunt through the Deepwood leads you to a gruesome scene. Several bodies, some of them still clinging to life, hang from the trees like marionettes, each with luminescent orange eyes. Noisy pots and other metal objects also hang from their bodies in a grotesque alarm system, no doubt to alert whatever it is that has lured you here.`,
        type: "story",
      },
      {
        text: `PERFORM A SNEAKING CHECK (DIFFICULTY 3). IF YOU SUCCEED, ALL OATHSWORN GAIN A REDRAW TOKEN AND MARK THE ENCOUNTER SPECIAL RULES BOARD BOX FOR CHAPTER 2 ON YOUR FREE COMPANY SHEET. IF YOU FAIL, YOU WILL BE AMBUSHED. MARK THE AMBUSHED BOX FOR CHAPTER 2 ON YOUR FREE COMPANY SHEET.`,
        type: "rule",
      },
      {
        text: `As if ripped from your nightmares, the giant creature stomps out of the shadows and you immediately recognize its haunting orange eyes from your shared night terror about Samil's death. Easily taller than a house, it wields a tree-size staff with a living man bound to the top like a trophy. The man's eyes beam with the same haunting orange light as the others and you realize these people must be controlled by the massive creature. As the beast raises its horned head and fixes its murderous stare upon you, it commands every man, woman and child under its spell to unleash an ear-splitting scream.`,
        type: "story",
      },
      {
        text: `IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 2.

IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 2.`,
        type: "rule",
      },
      {
        text: `An explosion of darklight blinds you. When you come to your senses, the beast is gone. Quickly, rushing to the aid of the human puppets, you find none have survived the creature's wrath. Gamel finds his son, Tam, amongst the slain and swears vengeance. You return to Bastone without proof of the creature's demise. As rumors spread, the citizens will only become more frightened and their suspicion more extreme.`,
        type: "story",
      },
      {
        text: `GAIN 8 IRON.

IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 2 ON YOUR FREE COMPANY SHEET.

TALLY LEVEL, LOOT AND LOSSES.`,
        type: "rule",
      },
    ],
  },
  {
    number: 3,
    name: "Chapter 3",
    sections: [
      {
        text: `No glasses are raised and no songs are sung in your honor after the attle with the creature. Without proof of the Satyr's death, the town ill continue to search for the cause of the murders and nightmares.

You rise the next day to see a procession heading toward the center of own, with more and more citizens joining it along the way.`,
        type: "story",
      },
      {
        text: `OPEN MYSTERY ENVELOPE 'A' AND PLACE ITS CONTENTS IN THE CENTER OF PLAY.

YOU MAY START A TRADE WITH THE BANKSMITH AND APOTHECARY.`,
        type: "rule",
      },
      {
        text: `Fableman Greycane catches you in the street, he looks tired and drawn. "They've taken her," he tells you. "Lyceen, the Apothecary. They blame er for the nightmares."

He hurries you to the town square where piles of timber have been tacked around a huge metal pole driven into the flagstone. Bound to the ole, Lyceen pleads with the crowd, "Please, you don't know what you are oing! You don't realize what will happen!"

As you push through the crowd, the wood pile bursts into flames and Lyceen cries out. The fire rises up around her and Lyceen's cry becomes  soul-wrenching scream. Off to the east, something from the Deepwood eturns the call, something big. Beyond the city wall, a deep rumbling ound draws closer, and then a mighty crack reverberates through the ir. Over the rooftops, you look into the distance and see the city's astern wall crack and crumble under the force of a powerful impact. Smoke begins to rise, and buildings collapse as something enormous enetrates the city.

Lyceen is clearly a witch and her pain is drawing something from the Deepwood. You must put a stop to this. Not knowing whether killing the oman would make things worse, you leap onto the blazing platform and ut Lyceen free.`,
        type: "story",
      },
      {
        text: `PERFORM A MIGHT CHECK (DIFFICULTY 5). IF YOU SUCCEED, ALL OATHSWORN GAIN A EMPOWERED X3 TOKEN AS YOU ACT WITHOUT HESITATION.`,
        type: "rule",
      },
      {
        text: `Lyceen collapses into your arms, gasping for breath. "You should have one that sooner," she says. "The Keening could have been prevented."`,
        type: "story",
      },
      { text: `GAIN ALLY CARD 9 (LYCEEN).`, type: "rule" },
      {
        text: `"The Deepwood's come alive!" cries a man, as he flees from the estruction. As buildings begin to collapse in a pattern heading traight toward you, you catch your first glimpse of the devastating east. Great tusks ring a head of storm gray armored plates and thick egs the size of tree trunks pound the earth. You have never encountered nything so gigantic. No city can survive a breach like this. Your only ption is to escape while you still can. You run as fast as you can hrough the city streets and alleys. Shouts and cries for help ring out hile buildings collapse left and right.`,
        type: "story",
      },
      {
        text: `ALL OATHSWORN PERFORM A SURVIVAL CHECK (DIFFICULTY 4). ALL THAT FAIL LOSE 1 HIT POINT.`,
        type: "rule",
      },
      {
        text: `"This is my street! Please, we need to help them!" your guide, Midge, houts as he points to a half-fallen building.`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER:

A. Help them.

ALL OATHSWORN GAIN A REDRAW TOKEN, BUT EACH OATHSWORN PERFORMS A SURVIVAL CHECK (DIFFICULTY 4). ALL THAT FAIL, LOSE 1 HIT POINT.

B. Continue.

You continue without helping.`,
        type: "rule",
      },
      {
        text: `You continue running toward the main gate. It is barred shut and will ake time to open. As you and the guards scramble to lift the heavy bar, he ground shakes and a smell of sulfur fills the air as the great east, the Doom of Bastone, breaks through a line of houses up the treet. One of you can try to distract it, or you can all stand together hile the guards open the gate.`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER:

A. One Oathsworn defends alone.

ONE OATHSWORN PERFORMS TWO ROUNDS OF COMBAT AGAINST DEFENSE 6.

THE CHOSEN OATHSWORN GAINS 2 COMBAT TOKENS OF THEIR CHOICE.

B. You stand together.

PERFORM A ROUND OF COMBAT AGAINST DEFENSE 5.

ALL OATHSWORN GAIN A DEFENSE TOKEN. `,
        type: "rule",
      },
      {
        text: `You finally manage to get the gate open. You turn to run, but are onfronted with a sea of claws and teeth waiting outside. You try esperately to fight through the pack of beasts, but each time you trike one down, two more take its place. You begin to feel hope may be ost and your Oath soon fulfilled. As the next wave approaches, Lyceen imps in front of you. With cold fury in her eyes, she raises her utstretched arms and the blood of the fallen levitates off the ground nto the air. As the charging beasts draw closer, Lyceen lets loose a urious roar and the blood coagulates into the shape of countless spikes nd spears. With a flick of her wrist, the projectiles rip through the avenous creatures, obliterating them in the hundreds, leaving nothing ehind but a field of carnage. In the aftermath Lyceen collapses. Scooping her up, you take her with you. You owe her that much.

With a way cleared, you press through the gate. Behind you the city alls, and all around you, the sounds of death can be heard as people tream into the Deepwood. Running through the trees you lose the great east that pursued you and instead bump into another group of refugees ed by Greycane and Bram. Thankfully, they survived the carnage as well.`,
        type: "story",
      },
      {
        text: `GAIN ALLY CARDS 7 AND 8 (GREYCANE AND BRAM).

ALL OATHSWORN GAIN A REDRAW TOKEN. `,
        type: "rule",
      },
      {
        text: `Banding together, you decide on your next steps. Your only hope at this oint is to head home to Verum, but you are going to need to find the Wire Road first. Several hours into the trek, the rumbling begins again. This time from below.`,
        type: "story",
      },
      {
        text: `PERFORM A REASONING CHECK (DIFFICULTY 5). IF YOU SUCCEED, MARK THE ENCOUNTER SPECIAL RULES BOARD BOX FOR CHAPTER 3 ON YOUR FREE COMPANY SHEET.`,
        type: "rule",
      },
      {
        text: `The shaking stops for a moment, and the procession of refugees holds its ollective breath. Suddenly, the gaping maw of a giant Wyrm bursts from he hard earth, swallowing one of the poor refugees whole.`,
        type: "story",
      },
      {
        text: `IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 3.

IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 3. `,
        type: "rule",
      },
      {
        text: `You stand triumphant over hacked bits of the massive Wyrm's corpse, but he battle was not without casualties. Lost in the middle of the Deepwood, with a group of terrified civilians and limited supplies, you now there will be more lives lost before you can reach the safety of Verum. All hope relies on you finding the Wire Road now.`,
        type: "story",
      },
      {
        text: `GAIN 8 IRON.

GAIN 2 IRON PER CIVILIAN LEFT ALIVE AT THE END OF THE ENCOUNTER.

IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 3 ON YOUR FREE COMPANY SHEET

TALLY LEVEL, LOOT AND LOSSES. `,
        type: "rule",
      },
    ],
  },
  {
    number: 4,
    name: "Chapter 4",
    sections: [
      {
        text: `After the fall of Bastone, most of your caravan is still alive... lost, ut alive. Without the Wire Road, you have to rely on your other ifelines to navigate the Deepwood, your compass and an old map Greycane ecovered before you left Bastone. Together, they will have to be enough o get you and your ramshackle caravan of survivors back to the capital ity of Verum.
`,
        type: "story",
      },
      {
        text: `PERFORM A REASONING CHECK (DIFFICULTY 6). IF YOU SUCCEED, ALL OATHSWORN GAIN AN EMPOWERED X3 TOKEN FOR GETTING YOUR BEARINGS QUICKLY.`,
        type: "rule",
      },
      {
        text: `You travel for the rest of the day, arriving at a large stone, etched ith some long forgotten writing. A waystone you recognize on Greycane's ap. As the shadows lengthen, you decide to shelter here for the night. Looking into the haggard faces of the civilians, you start piling up mber nuggets to light a fire and prepare for whatever the Deepwood has o throw at you. As darkness wraps around your camp, you keep your backs o the fire and stand guard. Throughout the night, things stalk at the ight's edge, just beyond sight. Claws reach out of the dark only to be ut back by your blades, and more than once you must brandish flaming orches to ward them off. It does not work every time though.`,
        type: "story",
      },
      {
        text: `EACH OATHSWORN PERFORMS A SURVIVAL CHECK (DIFFICULTY 4). ALL THAT FAIL, LOSE 1 HIT POINT. ALL THAT SUCCEED GAIN A REDRAW TOKEN.`,
        type: "rule",
      },
      {
        text: `As a dim light breaks through the thick green canopy, your group has rown smaller. There is a solemn silence as you break camp and continue he journey.

The trees continue on forever, and the long trudge is all you know until ater that day you hear someone retching down the line, and see a man on is knees. "He tripped over that thing and it squirted something at im," a woman informs you. Looking down at his feet, you see a pink yst, freshly disgorged. You know all too well what inhaling that black loud means. This man will not survive.`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER:

A. Kill him now. 

ALL OATHSWORN GAIN A DEFENSE TOKEN. 

B. Leave him behind. 

ALL OATHSWORN GAIN A +2 ANIMUS TOKEN. `,
        type: "rule",
      },
      {
        text: `Matters do not get any easier. The next day, shortly after the march has tarted, your caravan wanders into a field of bloodthorns. Crimson and pearlike, they poke up from the ground all around you. Seeing no way round the danger, you are forced to press into the field.
`,
        type: "story",
      },
      {
        text: `ALL OATHSWORN PERFORM A SURVIVAL CHECK (DIFFICULTY 3). ALL THAT SUCCEED GAIN A BATTLEFLOW TOKEN. ALL THAT FAIL, LOSE 1 HIT POINT.`,
        type: "rule",
      },
      {
        text: `Beyond the bloodthorns, the green shows no sign of relenting. March fter march continues, and soon the question of food arises. For the ast few days, you have rationed your supplies well, but even with this hey are coming to an end. Hungry faces stare at you as you take the emaining food from your backpacks. It will not be enough for everyone.
`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER: 

A. Take most for yourself. 

ALL OATHSWORN LOSE A RANDOM COMBAT TOKEN. 

B. Distribute it amongst the refugees.  

ALL OATHSWORN GAIN 1 REDRAW TOKEN. TWO OATHSWORN LOSE 1 HIT POINT (YOUR CHOICE).`,
        type: "rule",
      },
      {
        text: `You continue to march for what feels like an eternity, and just as you egin to lose hope of ever finding any sign of civilization, you spot an ld stone bridge. In the middle, a lone Bastonian guardsman stands in he midst of several dead bodies. Your presence startles him, and he aises his sword in defense. But as you approach, he recognizes the Oathmark on your wrist and relaxes his shoulders in relief.

"Our squad was attacked," he tells you. "They came from the trees. Hooks nd chains ripped away the Sergeant. They knocked me down, and I blacked ut. Must have thought me dead. I was lucky, I guess."`,
        type: "story",
      },
      {
        text: `ALL OATHSWORN GAIN ONE ITEM OF THEIR CHOICE FROM THE CHAPTER 4 COMMON ITEMS DECK. SHUFFLE THE DECK AFTERWARD.

GAIN ALLY CARD 12 (LUCKY). `,
        type: "rule",
      },
      {
        text: `Not far from the bridge, you find a long forgotten village now overgrown ith weeds and sickly Deepwood vines. Faint crying can be heard from the illage center. Perhaps more survivors found refuge here. `,
        type: "story",
      },
      {
        text: `PERFORM A SPOT CHECK (DIFFICULTY 4). IF YOU SUCCEED, MARK THE ENCOUNTER SPECIAL RULES BOARD BOX FOR CHAPTER 4 ON YOUR FREE COMPANY SHEET. IF YOU FAIL, YOU WILL BE AMBUSHED. MARK THE AMBUSHED BOX FOR CHAPTER 4 ON YOUR FREE COMPANY SHEET.`,
        type: "rule",
      },
      {
        text: `As you enter the village, you find a group of refugees fearfully looking p into the trees. As they do so, a hulking warrior clad in furs and craps of leather and iron leaps from the canopy with a massive ouble-headed axe in his hands. Then two more fighters emerge from other rees. These men are bare chested and wield crude swords fashioned with  large hook that hangs from a long chain. Their skin is covered in cars. You know a Scar Tribe when you see one, and no doubt there are ore of them hiding in the shadows. As you heft your weapons and prepare or battle two more fighters emerge and join their tribesmen.`,
        type: "story",
      },
      {
        text: `IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 4.

IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 4. `,
        type: "rule",
      },
      {
        text: `Bodies litter the village. There is something different about killing en, even men such as these. You take in the scene and realize it was ot all bad. The new group of survivors are flush with rations, enough o get you to Verum. Now you just have to find it.

As the journey resumes, you are walking at the head of the caravan when  cold, metallic thrum echoes in your mind. Thrum... Again, the familiar ound, but it seems you are the only one who hears it. Thrum... Unmistakable now, it is the low plucking of the Wire Road. You track the ound through the trees quickening your pace with each step. Thrum.

The noise fades, and you suddenly find yourself staring into the eyes of Samil as he rests a hand on the Wire Road. Thrum... Your dead battle rother, who you lost on the road to Bastone plucks it one last time and anishes before your eyes. You do not know why you are seeing Samil, but e just helped you find your way home.`,
        type: "story",
      },
      {
        text: `GAIN 10 IRON.

GAIN 2 IRON PER CIVILIAN LEFT ALIVE AT THE END OF THE ENCOUNTER.

IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 4 ON YOUR FREE COMPANY SHEET.

TALLY LEVEL, LOOT AND LOSSES.`,
        type: "rule",
      },
    ],
  },
  {
    number: 5,
    name: "Chapter 5",
    sections: [
      {
        text: `Hunger, cold and constant rain gnaw at you and the remaining survivors from Bastone. Finally, hope at last. Rising above the trees in the distance, you see the mighty walls of Verum.`,
        type: "story",
      },
      {
        text: `OPEN MYSTERY ENVELOPE 'B' AND PLACE ITS CONTENTS IN THE CENTER OF PLAY.
`,
        type: "rule",
      },
      {
        text: `The survivors cheer as they rush toward the sealed gate, begging for admittance. A Captain of the Wall Guard calls down to the caravan from atop the sixty-foot wall, "We do not open the gates for mobs emerging from the Deepwood!"

Stepping to the front of the group, you brandish your Oathmark and demand the gate be opened.`,
        type: "story",
      },
      {
        text: `PERFORM A THREATENING CHECK (DIFFICULTY 5). ADD 1 TO YOUR RESULT IF YOU HAVE AN URSUS WITH YOU. IF YOU SUCCEED, ALL OATHSWORN GAIN AN EMPOWERED X3 TOKEN AS YOU CONVINCE THE GUARD.`,
        type: "rule",
      },
      {
        text: `The Guard Captain looks over his shoulder and bows his head in deference. In his place glides the unmistakable form of a Watcher, its visage hidden in the signature black cloak and wielding a raven-headed staff. Rising the staff skyward, the towering city gates begin to grind open.

Beyond hope, you have escorted the survivors of Bastone to Verum. After showering you with thanks and praise, the refugees disperse into the city, eager to begin their second chance at life. Before departing you are called before the Watcher and instructed to debrief the mysterious representative of the Raven Spire on the events that transpired in Bastone. As you provide details surrounding the events that led to the destruction of the city, the Watcher drinks in the knowledge and seems especially interested when you mention the term 'Keening.

Some days later, while recovering from your injuries, you receive a letter containing a reward. It seems the crown has decided to use your story as a heroic tale to turn the focus away from Bastone's doom. And in light of your 'heroism', you have been granted ownership of a tavern.

You have barely taken your first step into the newly acquired establishment before Greycane and Midge are discussing how to fix the place up. With a tear in his eye, Bram whispers, "She's back. The Broken Oak is back."`,
        type: "story",
      },
      {
        text: `ALL OATHSWORN GAIN A REDRAW TOKEN.

GAIN A FREE COMPANY TRAIT OF YOUR CHOICE (MARK THIS ON YOUR FREE COMPANY SHEET).

ALL OATHSWORN LOSE ALL INJURY CARDS, RETURNING THEM TO THE BOTTOM OF THE INJURY DECK.`,
        type: "rule",
      },
      {
        text: `You take a few days of rest, and see the new Broken Oak form up. The people from Bastone become regulars, telling of their new lives and they are always quick to raise a mug in your honor. However, you eventually become restless. Comfort is death to a Free Company.

Luckily, Greycane has learned of a lord who is in need of help. Apparently, a Free Company and an entire logging crew were recently lost to the Deepwood and the lord has specifically requested aid from the 'Heroes of Bastone' to deal with the matter, and protect the next logging expedition going out.

The next morning you travel south into the Noble District to meet with the lord and sign the contract. It seems there are two survivors, a squire and a cur, who may be able to provide important information about what happened to the original expedition. But you will need to search the streets of Verum to find them.`,
        type: "story",
      },
      {
        text: `PERFORM A REASONING CHECK (DIFFICULTY 4) TO FIND THEM FASTER. IF YOU SUCCEED, ALL OATHSWORN GAIN A REDRAW TOKEN.`,
        type: "rule",
      },
      {
        text: `It does not take long to find the squire, Jonas, dwelling in the Gutters. A foul place, situated at the bottom of the old riverbed, the Gutters are home to Verum's poorest. When you find the squire, he politely refuses your offer of iron and asks only that you allow him the honor to serve the Oathsworn. Impressed with the young man's convictions, you accept.`,
        type: "story",
      },
      { text: `GAIN ALLY CARD 15 (JONAS).`, type: "rule" },
      {
        text: `The boy tells you that the cur, Keet, can be found at the Grand Bazaar. The thick crowds there are hard to navigate, but it gives you time to inspect the vendor's wares.`,
        type: "story",
      },
      {
        text: `ALL OATHSWORN MAY TRADE 5 IRON TO GAIN A +2 ANIMUS TOKEN ONCE. `,
        type: "rule",
      },
      {
        text: `Jonas points out Keet to you, and before she can bolt, you corner her with questions. She tells you where they were attacked, but she does not know by what.

As night falls, you gather a few amber torches and head outside the city walls to search for the remnants of the expedition.`,
        type: "story",
      },
      {
        text: `PERFORM A SEARCH CHECK (DIFFICULTY 6). IF YOU SUCCEED, MARK THE ENCOUNTER SPECIAL RULES BOARD BOX FOR CHAPTER 5 ON YOUR FREE COMPANY SHEET.`,
        type: "rule",
      },
      {
        text: `A short distance into the Deepwood, you find the broken and bloodied bodies of the lost expedition exactly where Keet described they would be. As you inspect the deceased, you can see these people were not bitten or mauled, but rather stung, and as you investigate the battle scene, you find only human tracks. Whatever killed these people must have been airborne, and there is only one thing you know of that flies and is capable of slaughtering an expedition this size - a Bloatfly.

Just as you finish the thought, the bodies before you bursting, young bloatflies crawl out, immediately jump up in the air and attack with their stingers.`,
        type: "story",
      },
      {
        text: `PERFORM A ROUND OF COMBAT AGAINST DEFENSE 8.

ALL OATHSWORN THAT SUCCEED, GAIN A DEFENSE TOKEN.`,
        type: "rule",
      },
      {
        text: `Armed with as much knowledge as you can glean with the time you have, you assemble the new logging expedition and prepare yourselves.`,
        type: "story",
      },
      {
        text: `YOU MAY START A TRADE WITH THE BANKSMITH AND APOTHECARY. `,
        type: "rule",
      },
      {
        text: `Under your protection, the new expedition heads out and begins to lay axes to trees. They start working, and shortly thereafter, you hear it. The buzzing. The grotesque, bulbous shape of a bloatfly dives through the canopy. Desperately, you shove aside one logger before he can be impaled and turn to face the writhing tentacles and multifaceted eyes of your enemy.`,
        type: "story",
      },
      {
        text: `IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 5.

IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 5. `,
        type: "rule",
      },
      {
        text: `With the bloatfly dead, and its body burned, the loggers collect the timber and you return to Verum. On the march back you try not to think about all the lives lost just so some noble could have a fine wooden chair to sit on, but an oath is an oath, and contracts such as these pay well.`,
        type: "story",
      },
      {
        text: `GAIN 10 IRON.

GAIN 2 IRON PER CIVILIAN LEFT ALIVE AT THE END OF THE ENCOUNTER.

IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL OATHSWORN, MARK THE EXTRA{" "}

UNIQUE ITEM BOX FOR CHAPTER 5 ON YOUR FREE COMPANY SHEET.       TALLY LEVEL, LOOT AND LOSSES.`,
        type: "rule",
      },
    ],
  },
  {
    number: 6,
    name: "Chapter 6",
    sections: [
      {
        text: `You feel the maggots writhing inside your chest, wanting to break out, then wake with a start realizing the bloatfly is dead.

The smell of warm bread fills The Broken Oak as you join the others in the tap room for breakfast. As Greycane strides over, he tosses a scroll on the table, "Best try to polish out some of the blood stains from your armor. Looks like you have an audience with the King."

You begin the walk to the palace and on your way across the Great Bridge spanning the Gutters, you encounter a sizable crowd gathered before a band of soothsayers, extolling their tales of woe.`,
        type: "story",
      },
      {
        text: `PERFORM A SPOT CHECK (DIFFICULTY 5). IF YOU SUCCEED, ALL OATHSWORN GAIN A +2 ANIMUS TOKEN AS YOU SPOT SAMIL.`,
        type: "rule",
      },
      {
        text: `Behind the group of sackcloth-wearing prophets you see a familiar face, Samil, who once numbered among you before he died on the Wire to Bastone. He is grinning at you with the same smile he had in life. Then you notice one of the Doomsayers is also gazing at Samil in abject terror. Urine runs freely down the man's leg. You start toward Samil, but are stopped by a priest rushing up to meet you. Samil disappears as the priest petitions you. "Oathsworn! Thank the One. Please, you must come with me. The fate of the city is at stake!" You know keeping a king waiting is not done lightly or without danger, but the look in this man's eyes tells you ignoring him may be a worse fate.

You oblige the priest's request, and follow him to an area of the city called 'The Cobbles. Upon arriving, you find a squad of guards desperately trying to defend a barricade erected to keep the people of The Cobbles from leaving.

As watch the chaotic scene unfold, the priest informs you you that a plague has begun to ravage the streets here. Worse still, one of the priests, Marius, was infected and has escaped the quarantine. "He was seen with black lesions on his hands as he ordered the guards to let him pass," he tells you. "The fools let him through, and he is now at large in the city! You must find him before it spreads!"

Just as you turn to leave, the mob has grown and you can see the makings of a charge. If they break through, one missing priest will be the least of your worries.`,
        type: "story",
      },
      { text: `PERFORM A ROUND OF COMBAT AGAINST DEFENSE 6. `, type: "rule" },
      {
        text: `With the aid of the guards, you successfully drive the mob back and restore order. Confident the guards have the situation under control, you embark on the hunt for the infected priest.`,
        type: "story",
      },
      {
        text: `PERFORM A SEARCH CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORN GAIN A REDRAW TOKEN.`,
        type: "rule",
      },
      {
        text: `You visit the Apothecary first, hoping Brother Marius may have sought a cure there.`,
        type: "story",
      },
      { text: `YOU MAY START A TRADE APOTHECARY.`, type: "rule" },
      {
        text: `You learn the priest had been there, but he did not purchase anything. Thankfully, no one came into physical contact with him, and he was last seen heading south toward the archives.

Your journey to the city archives requires you to traverse the Great Bridge once again. As you cross, you encounter a woman speaking with a pair of city guards. Listening to her story, you realize she was knocked to the ground by Brother Marius, which means she may be infected as well.`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER: 

A. Kill her. 

ALL OATHSWORN GAIN AN EMPOWERED X3 TOKEN. 

B. Send her under guard to The Cobbles. 

ALL OATHSWORN GAIN A DEFENSE TOKEN. 

C. Leave her. 

ALL OATHSWORN GAIN A +2 ANIMUS TOKEN. `,
        type: "rule",
      },
      {
        text: `You arrive at the archives where you enter the library to search for clues as to what Brother Marius was looking for.`,
        type: "story",
      },
      {
        text: `PERFORM A SEARCH CHECK (DIFFICULTY 3). IF YOU SUCCEED, ALL OATHSWORN GAIN A REDRAW TOKEN.`,
        type: "rule",
      },
      {
        text: `Assisted by the archivists, you learn that Brother Marius removed an old map of the city tunnels that lie beneath the Cathedral. "Oh dear," an archivist laments. "Those tunnels lead directly to the Palace."

Wasting no time, you rush to the Cathedral and order the clergymen to direct you toward the tunnels. After some time searching through the damp darkness beneath the city, you locate the priest and find him slumped against a wall. His skin is covered in black blisters that ooze pus.

He turns weakly at your approach, holding out a noxious looking censer in his hand, "I thought I had more time. This... this is the source of the plague. Chief Apothecary Corbus must be informed..." Painful cramps halt his speech and bring him to his knees. Suddenly, a long, root-like tendril emerges from his mouth like an infected Deepwood vine. Before your eyes, Brother Marius transforms into an abhorrent abomination and the insidious thing lunges at you with razor sharp limbs.`,
        type: "story",
      },
      { text: `PERFORM A ROUND OF COMBAT AGAINST DEFENSE 7. `, type: "rule" },
      {
        text: `After securing the plague ridden censer, you bring Chief Apothecary Corbus with you to explain the situation to the King. Despite his young age, Favian is a regal monarch and listens intently to your report. As you finish your debrief, a Watcher - one of which is always at the King's side - leans forward and whispers into his ear.

The King pauses for a moment in thought, then decrees that you must travel to Cistercia immediately. A raven will be sent ahead of you to instruct the Holy City to prepare its mendicants at once. You will escort the mendicants back to Verum to ensure their safe passage. As you prepare Greycane finds some hired swords, Brevik and Yani, who may be of use.`,
        type: "story",
      },
      {
        text: `ALL OATHSWORN GAIN 1 CHAPTER 6 ITEM OF THEIR CHOICE. 

YOU MAY START A TRADE WITH THE BANKSMITH. 

YOU MAY GAIN BREVIK AND/OR YANI AS ALLIES FOR 10 IRON EACH. 

IF YOU HIRE BREVIK, GAIN ALLY CARD 17 (BREVIK). 

IF YOU HIRE YANI, GAIN ALLY CARD 18 (YANI). `,
        type: "rule",
      },
      {
        text: `Within hours of the King's decree, you are once again on the Wire Road, trudging through the Deepwood. Not far from Verum's gate you notice the air becomes filled with a pregnant silence. The only thing worse than hearing noise in the Deepwood, is hearing nothing at all. As though they had been waiting for your arrival, three horrors fly at you from between the trees, whip-like arms strike out to impale you.`,
        type: "story",
      },
      {
        text: `IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 6. 

IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 6.  

YOU ARE AMBUSHED. MARK THE AMBUSHED BOX FOR CHAPTER 6 ON YOUR FREE COMPANY SHEET.`,
        type: "rule",
      },
      /* Epilogue missing */
    ],
  },
  {
    number: 7,
    name: "Chapter 7",
    sections: [
      {
        text: `Rays of sunlight pierce the cloud cover illuminating the majestic white walls of Cistercia. The expansive, tiered city is truly a sight to behold after many days spent stomping through the Deepwood in a never-ending deluge of rain. The home of the church, it is the birthplace of the Justinian faith that is held throughout the known cities. It is also second only to Verum in influence, you know to watch your step here.

"Pillar and Path to you, Oathsworn," a priest welcomes you. "I will escort you to the Lord Marshall at once."`,
        type: "story",
      },
      {
        text: `OPEN MYSTERY ENVELOPE 'C' AND PLACE ITS CONTENTS IN THE CENTER OF PLAY.
`,
        type: "rule",
      },
      {
        text: `You are brought to the Conclave, the seat of power in Cistercia, where the Lord Marshall is waiting for you. You are told the requisition of mendicants will be made available to you, but your assistance in a delicate matter is required first. A Venerator, one of the most revered and sacred members of the military wing of the Ecclesiarch, has gone missing. These elite warriors are pillars of the Justinian faith. Never once has a Venerator failed in their duty, so for one to inexplicably disappear is cause for great concern. The Lord Marshall needs you to find the missing Venerator as discreetly as possible. Quintus, the Lord Marshall's adjutant, will assist you in the endeavor.`,
        type: "story",
      },
      {
        text: `GAIN ALLY CARD 19 (QUINTUS).

YOU MAY START A TRADE WITH THE BANKSMITH AND APOTHECARY. `,
        type: "rule",
      },
      {
        text: `The first stop on your investigation is at the 'Hall of the Hundred'. This massive, cathedral-like garrison is where the towering Venerators are quartered. Attended by a pair of custodians, each Venerator - exactly one hundred in all - lives, trains and worships within these hallowed halls.

Escorted by Quintus, you are greeted by a priest as you enter. He informs you that in order to gain information here you must first be 'weighed. "One, or all, must take the trial," he says. "Iron will sharpen iron. The pillar must be strengthened."

Seeing the confusion on your face, Quintus explains with a grin, "You will need to defeat one of the Venerators in a trial combat."`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER:

A. One takes the trial.

ONE CHOSEN OATHSWORN LOSES 3 HIT POINTS. THE CHOSEN OATHSWORN GAINS A BATTLEFLOW TOKEN.

B. All take the trial.

PERFORM A ROUND OF COMBAT AGAINST DEFENSE 9.`,
        type: "rule",
      },
      {
        text: `You prove your strength, or at least that you can take a hit, and are brought to a separate hall where the sacred Venerator armor is maintained. Walking past the towering armaments, you see they also serve as shrines, as several sets are surrounded by worshipers. Eventually, you arrive at an empty pedestal and are told this is where the missing suit of armor belonging to Venerator Logos is normally stowed. "Venerator Logos was an ardent champion of the written word," the priest says. "He was seen often in the Great Library."

Heading to the Great Library, you discover that Logos had recently accessed a forbidden section of the library protected by a complex locking mechanism. Such an ancient vault is surely trapped.`,
        type: "story",
      },
      {
        text: `PERFORM A REASONING CHECK (DIFFICULTY 5). IF YOU SUCCEED, ALL OATHSWORN GAIN A BATTLEFLOW TOKEN AS YOU MANAGE TO OPEN THE SEALED VAULT. IF YOU FAIL, 1 RANDOM OATHSWORN LOSES 1 HIT POINT.`,
        type: "rule",
      },
      {
        text: `The tomes in this vault contain forbidden rituals of dark magic. One of them has been stolen. Whatever Venerator Logos is up to, it is outlawed and so he must be in hiding.

The considerable size and renown of a Venerator would make it all but impossible to hide or blend into the crowds of Cistercia. So through a process of elimination you deduce he can only have chosen the remote mountain burial tombs to conduct his activities. As you enter the tombs, you are assaulted by the odor of death and decay and find fresh stains of blood.`,
        type: "story",
      },
      {
        text: `PERFORM A SPOT CHECK (DIFFICULTY 4). ADD 1 TO YOUR RESULT IF YOU HAVE THE HUNTRESS WITH YOU. IF YOU SUCCEED, ALL OATHSWORN GAIN A DEFENSE TOKEN AS YOU AVOID SEVERAL TRAPS.`,
        type: "rule",
      },
      {
        text: `You follow the tracks, and deeper inside, you find some huge stone coffins that have recently been opened. Inside them, you find scraps of cloth and bones, as well as blood stains on the floor. This was the work of the Venerator. He was here a day ago, but has now left. You make further inquiries throughout the city to find out where he went.`,
        type: "story",
      },
      {
        text: `PERFORM A SEARCH CHECK (DIFFICULTY 4). ADD 1 TO YOUR RESULT IF YOU HAVE THE PRIEST WITH YOU. IF YOU SUCCEED, ALL OATHSWORN GAIN AN EMPOWERED X3 TOKEN AS YOU HOME IN ON YOUR TARGET QUICKLY.`,
        type: "rule",
      },
      {
        text: `Following the tracks of this Venerator becomes like tracking a creature in the Deepwood. The clues lead you out of the city to a small village, just beyond Cistercia's walls. You arrive at the village after dusk and find the townspeople gathered together in the town square. In the center of the assembly, is the towering form of the Venerator.

As he holds a book in one hand, the Venerator begins some kind of ritual, and you notice a vacant expression on each villager's face. Crushed corpses lay on the ground at his feet in pools of blood, and you immediately recognize this as blood magic.

Muffled cries draw your attention to a nearby cage filled with villagers as you watch the Venerator select his next victim.`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER:

A. Hide and observe the ritual.

MARK THE ENCOUNTER SPECIAL RULES BOARD BOX FOR CHAPTER 7 ON YOUR FREE COMPANY SHEET.

B. Reveal yourself and intervene.

ALL OATHSWORN GAIN A REDRAW TOKEN.

YOU WILL BE AMBUSHED. MARK THE AMBUSHED BOX FOR CHAPTER 7 ON YOUR FREE COMPANY SHEET.

IN EITHER CASE,

IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 7.

IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 7. `,
        type: "rule",
      },
      {
        text: `As the Venerator lies fallen in a pool of blood, look around at the surrounding townspeople and see they are all still in a trance. The Venerator's death has not released them. On the ground beside his corpse, you find the wicked tome he stole from the Great Library.`,
        type: "story",
      },
      {
        text: `IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 7 ON YOUR FREE COMPANY SHEET.

TALLY LEVEL, LOOT AND LOSSES.`,
        type: "rule",
      },
    ],
  },
  {
    number: 8,
    name: "Chapter 8",
    sections: [
      {
        text: `With many villagers still under the strange spell, you focus on those that had yet to fall to the Venerator's powers. From them you learn the Venerator arrived yesterday and immediately began the sacrifices. No explanation. No warning.

Among the lucid is a Banksmith who, grateful for your efforts, offers you a selection of weapons and armor.`,
        type: "story",
      },
      {
        text: `YOU MAY START A TRADE WITH THE BANKSMITH.

ALL OATHSWORN GAIN ONE ITEM OF THEIR CHOICE FOR FREE AND MAY TRADE FOR ADDITIONAL ITEMS AS USUAL.`,
        type: "rule",
      },
      {
        text: `After your trade, your attention returns to the Venerator's corpse and the malefic tome that lies beside it, wrapped in charred black leather and bound by chains.

Suddenly, the village is thrown into a panic. "The children! The children are missing!" a mother screams.

During the battle with the Venerator, it seems the children ran off into the woods. Considering the violence, it is understandable they might run and hide, but flee into the woods? Surely, they know better. Thinking that this village cannot get much stranger, you move to secure the Venerator's stolen tome.`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER:

A. Open the book.

ALL OATHSWORN GAIN A REDRAW TOKEN.

B. Burn the book.

ALL OATHSWORN GAIN A DEFENSE TOKEN. `,
        type: "rule",
      },
      {
        text: `The last thing you remember is touching the book.

You awaken in a desolate field of bones beneath a twisting miasma of sky illuminated by twin orange suns. A young girl stands before you. She says her name is Lina and reveals she is one of a number of children trapped in this strange realm. The other children are scattered throughout this place on various islands floating in the maelstrom. Lina believes by saving them, you might save yourself. Leading you through the bonelands she reveals a secluded thicket where you find a large, wooden table surrounded by empty chairs. On the table is a map with a miniature statue on top. "This appeared when you did," Lina says.`,
        type: "story",
      },
      {
        text: `OPEN MYSTERY ENVELOPE 'D' AND PLACE ITS CONTENTS IN THE CENTER OF PLAY.`,
        type: "rule",
      },
      {
        text: `Instinctively, you move the sculpture to one of the islands depicted on the map and the world around you instantly transforms. You are suddenly standing in an enormous silk web as a giant spider tends to a pair of children wrapped in cocoons. This is your chance to test Lina's theory, but saving both children from the spider may prove difficult.`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER:

A. Save only one.

PERFORM A ROUND OF COMBAT AGAINST DEFENSE 7.

PLACE A TRACKER DIE SHOWING 1 ON THE TABLE.

B. Save both.

PERFORM A ROUND OF COMBAT AGAINST DEFENSE 8.

PLACE A TRACKER DIE SHOWING 2 ON THE TABLE.`,
        type: "rule",
      },
      {
        text: `As life flees from the giant arachnid's eyes, again the world shifts in a gut wrenching swirl and you find yourself back in the thicket, staring at the map on the table. The chairs around the table are now filled with the children you saved.

This realm is pure madness, but at least you have something to focus on. Moving the sculpture to another island brings you to a swampy marshland. You can hear children singing in the distance. As you turn, you suddenly see the face of the woman from Bastone whom you failed to save from the Broodmother. The giant rat screeches from somewhere far off in the muggy bog.`,
        type: "story",
      },
      {
        text: `EACH OATHSWORN PERFORMS A SANITY CHECK (DIFFICULTY 5). ADD ONE TO YOUR RESULT FOR EACH HIT POINT YOU HAVE LOST SO FAR. ALL THAT FAIL, LOSE A HIT POINT AS YOUR MIND BEGINS TO UNRAVEL. ALL THAT SUCCEED, GAIN A BATTLEFLOW TOKEN AS YOU BEGIN TO SEE THROUGH THE ILLUSION.`,
        type: "rule",
      },
      {
        text: `Pressing on, you come to a clearing and see a child skipping around a rock with a glowing glyph carved into its surface. The young girl's feet are blistered and bloody. You instinctively pick her up and are immediately teleported back to the thicket. Another child sits at the table.`,
        type: "story",
      },
      { text: `INCREASE THE DIE ON THE TABLE BY 1. `, type: "rule" },
      {
        text: `You feel stronger. Or the hold this place has on you grows weaker. You think you could leave, but know there are still more children out on the islands.`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER:

A. Look for another child.

INCREASE THE NUMBER ON THE TRACKER DIE BY 1.

B. Leave immediately.

ONE RANDOM OATHSWORN LOSES 1 HIT POINT, ALL OATHSWORN GAIN A +2 ANIMUS TOKEN.`,
        type: "rule",
      },
      {
        text: `With the children around you smiling, an irresistible urge causes you to flip the table. Time stands still as the map flies in the air and your world spins into chaos. When the swirling unreality settles, you are back in reality in the village, standing over the Venerator's corpse.

Not only are you back in the village but you seem to know where the children are. Following your instincts, you find a den of bones, fetishes and many children. You note some of them are familiar. They are the ones you saved in the realm of madness. Other children hang from the trees, their eyes glowing a brilliant orange. This is a scene you are all too familiar with. Sentries. The Satyr is here.`,
        type: "story",
      },
      {
        text: `PERFORM A SNEAK CHECK (DIFFICULTY 7). ADD THE NUMBER ON THE TRACKER DIE TO YOUR RESULT. IF YOU SUCCEED, ALL OATHSWORN GAIN A COMBAT TOKEN OF THEIR CHOICE AND MARK THE ENCOUNTER SPECIAL RULES BOARD BOX FOR CHAPTER 8 ON YOUR FREE COMPANY SHEET. IF YOU FAIL, YOU WILL BE AMBUSHED. MARK THE AMBUSHED BOX FOR CHAPTER 8 ON YOUR FREE COMPANY SHEET.`,
        type: "rule",
      },
      {
        text: `The great form of the Satyr is before you, wielding its massive staff. Atop the staff you see Lina, the girl who had guided you in the realm of madness. Bound to its apex, darklight streams from her open mouth in a silent scream. It had been the Satyr's mad realm that you were trapped in, and now that you have escaped it, you can finally end this.`,
        type: "story",
      },
      {
        text: `IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 2.

IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 2. `,
        type: "rule",
      },
      {
        text: `You break the Satyr's staff and cast the fiend down. As the orange eyes finally go dim and lifeless, you see Samil standing behind the Satyr. You had hoped ending the Satyr would also end the visions of your dead comrade but from the look of the smirk on his face he is not going anywhere. As the children start crying, Samil disappears in a blink. You learn the young girl, Lina, was taken from a village near Verum, not Cistercia, and decide she will return there with you. After delivering the Venerator's armor to the Lord Marshall and collecting your mendicants, you begin the trip back to Verum.`,
        type: "story",
      },
      {
        text: `GAIN ALLY CARD 21 (LINA).

YOU GAIN 20 IRON.

IF YOU HAVE THE VENERATED PLATE ITEM CARD, ARCHIVE IT AND GAIN 8 IRON.

IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 8 ON YOUR FREE COMPANY SHEET.

TALLY LEVEL, LOOT AND LOSSES.`,
        type: "rule",
      },
    ],
  },
  {
    number: 9,
    name: "Chapter 9",
    sections: [
      {
        text: `After your experience in Cistercia with the Venerator and the Satyr, you are glad to bring the mendicants back to Verum. You are hailed as heroes whilst the mendicants are put to work on the sick. Looking around, you can see that the plague has gotten worse.

You enjoy some days back home in The Broken Oak where Midge uses you for pickpocket practice, and Bram uses you as test subjects for his new ales.`,
        type: "story",
      },
      {
        text: `ALL OATHSWORN LOSE ALL INJURY CARDS, RETURNING THEM TO THE BOTTOM OF THE INJURY DECK.

YOU MAY START A TRADE WITH THE BANKSMITH AND APOTHECARY. `,
        type: "rule",
      },
      {
        text: `Some nights later, a knock on the tavern's door empties The Broken Oak of all its patrons. One of the mysterious Watchers has come to speak with you and he has brought some kind of hulking monstrosity with him. The massive form remains outside the tavern, its glowing eyes pierce the fog.`,
        type: "story",
      },
      {
        text: `PERFORM A REASONING CHECK (DIFFICULTY 3). ADD 1 TO YOUR RESULT IF YOU HAVE THE WARDEN WITH YOU. IF YOU SUCCEED, ALL OATHSWORN GAIN A DEFENSE TOKEN AS YOU RECOGNIZE THE THING OUTSIDE.`,
        type: "rule",
      },
      {
        text: `The Watcher hands you a contract. It is "inobligatum, meaning it cannot be refused. You are to travel to Glimhollow, an amber mining village which has gone silent. Amber is the source of much of the heat and light in the city and you must reopen the supply lines. Before departing, the Watcher hands you a rod made of a strange material. "Use this to control the Golem," he says. "You will find it quite useful on your journey?"

The trek to Glimhollow passes without incident and you arrive at the town in good time. You find the palisade walls surrounding the settlement to be newly repaired. Judging by the damage to its exterior, this town is under regular assault from the beasts of the woods.`,
        type: "story",
      },
      {
        text: `OPEN MYSTERY ENVELOPE 'E' AND PLACE ITS CONTENTS IN THE CENTER OF PLAY.`,
        type: "rule",
      },
      {
        text: `At the top of the walls, you are met by a dozen drawn bows. Even with your Oathmark, the guards are denying you entry.`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER:

A. Command the Golem to break down the gates. 

ALL OATHSWORN GAIN A REDRAW TOKEN.

B. Threaten the guards to open the gates.

ALL OATHSWORN GAIN AN EMPOWERED X3 TOKEN.`,
        type: "rule",
      },
      {
        text: `After the messy incident at the main gate, you are brought to the home of Glimhollow's mayor, who nervously apologizes for his guards' behavior. You notice there is something off about the man as he speaks and goes on to explain how the town has been besieged by a massive creature which has effectively cut them off from Verum. "Each time the beast attacks, it breaches the city walls and consumes our amber supply!" he exclaims.

You are given a room at the local tavern for the night and as you bed down for the evening, you discover a crumpled note beneath your pillow from the town Apothecary who asks you to visit her the following morning. Sleep comes quickly, but at some point past the witching hour, you are awoken by the horrifying sight of the Iron Golem strangling the life from one of your comrades. Reaching for the control rod, you discover it missing. Suddenly, robed figures burst into the room and attack with daggers.`,
        type: "story",
      },
      {
        text: `PERFORM A SPOT CHECK (DIFFICULTY 6). IF YOU FAIL, A RANDOM OATHSWORN LOSES 1 HIT POINT.

IN EITHER CASE, PERFORM A ROUND OF COMBAT AGAINST DEFENSE 8. `,
        type: "rule",
      },
      {
        text: `As you hold back the Golem, and fend off the ambush, one of you has to dive out the window to chase the robed figure who took the control rod.`,
        type: "story",
      },
      {
        text: `CHOOSE ONE OATHSWORN TO PERFORM A CHASE CHECK (DIFFICULTY 5). ADD 1 TO THE RESULT IF YOU CHOOSE THE HARBINGER.

IF THEY SUCCEED, ALL OATHSWORN GAIN A BATTLEFLOW TOKEN.`,
        type: "rule",
      },
      {
        text: `You eventually catch the thief and pull back their hood to find it is a woman. Before you have a chance to question her, she shatters the control rod on the ground, pulls a dagger from her cloak, and slits her own throat. Holding her arm, you discover she has a chunk of gleaming white amber planted under the skin of her forearm. There is clearly something dark going on in this village.

The next day, you wake to find the entire tavern empty - not a soul to be found except for your Iron Golem, which now lies inoperable.

You decide to seek out the Apothecary, hoping her invitation means she can offer an explanation as to what is going on here. Her shop is found empty, in a state of disarray with clear signs of a struggle. Someone must have discovered her attempt to contact you.`,
        type: "story",
      },
      {
        text: `PERFORM A SEARCH CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORN GAIN A +2 ANIMUS TOKEN.`,
        type: "rule",
      },
      {
        text: `The investigation takes you throughout the village where nearly everyone is loath to speak with you. Finally, the folks in the poorer section of town provide you with some key information which leads you to the amber mines in the northwest part of the village. Loud chanting draws you deep inside where you discover a group of cultists, gathered around a massive boulder of white amber, in the midst of a ritual seance. Chained to the stone awaiting sacrifice is a woman. Wasting no time, you charge in.`,
        type: "story",
      },
      { text: `PERFORM A ROUND OF COMBAT AGAINST DEFENSE 7. `, type: "rule" },
      {
        text: `Making short work of the cultists, the woman you have just saved turns out to be the Apothecary. She tells you the cult formed around this amber boulder not long ago. "They said I was being sacrificed so I could commune with the whispers."

Just then, alarms sound throughout the village. The creature preying upon the village has returned. It must have been called by the cultist's ritual. As you rush from the mines, you arrive in time to see the beast crash through the palisade, its skin slick with acid.`,
        type: "story",
      },
      {
        text: `PERFORM A SPOT CHECK (DIFFICULTY 5). IF YOU SUCCEED, MARK THE ENCOUNTER SPECIAL RULES BOARD BOX FOR CHAPTER 9 ON YOUR FREE COMPANY SHEET. IF YOU FAIL, YOU WILL BE AMBUSHED. MARK THE AMBUSHED BOX FOR CHAPTER 9 ON YOUR FREE COMPANY SHEET.

IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 9.

IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 9. `,
        type: "rule",
      },
      {
        text: `With the creature slain, and the town freed from the cult, the amber supply line reopens. You return to Verum where you are rewarded with a hefty bag of iron and the repaired Iron Golem, but not all is well. The plague continues to spread and it has now claimed some of the lives of the mendicants as well.`,
        type: "story",
      },
      {
        text: `GAIN ALLY CARD 22 (GOLEM).

YOU GAIN 32 IRON.

IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 9 ON YOUR FREE COMPANY SHEET.

TALLY LEVEL, LOOT AND LOSSES.`,
        type: "rule",
      },
    ],
  },
  {
    number: 10,
    name: "Chapter 10",
    sections: [
      {
        text: `The final mendicant has died of the plague and hope has died with them. The plague has spread throughout the Gutters and The Cobbles now, claiming thousands of lives.

The mood around The Broken Oak is grim. Greycane, ever the optimist, does his best to maintain morale. "Sometimes hope is found when you least expect it," he says. Just then, there is a knock at the door. "Ah! Just in time," he grins, heading to the tavern entrance.

An A'Dendri refugee from the Green Streets district enters The Broken Oak and introduces herself as "Guide" using The Knock sign language. Replying with his own hand gestures, claps and clicks, Greycane welcomes her and explains to the that the A'Dendri refugees believe the cure to the group plague may lie within The Wychwood, their former home.
"Convince the King to send an expedition there, and Guide here, will help you find the cure to save Verum," Greycane translates.

It does not take long for the 'Heroes of Bastone' to get an audience with young King Favian.`,
        type: "story",
      },
      {
        text: `GAIN ALLY CARD 23 (GUIDE).

PERFORM A REASONING CHECK (DIFFICULTY 5). ADD 1 TO YOUR RESULT IF YOU HAVE THE WARDEN WITH YOU. IF YOU SUCCEED, ALL OATHSWORN GAIN A REDRAW TOKEN FOR CONVINCING THE KING.`,
        type: "rule",
      },
      {
        text: `The King, with assent from his Watcher council, agrees to the expedition. You are assigned a group of botanists and archivists to assist with the effort, and an arrogant knight by the name of Cyprian, attached as their ward. As a last minute addition, the Watchers also assign an 'asset' from the Raven Spire to accompany you.`,
        type: "story",
      },
      {
        text: `YOU MAY START A TRADE WITH THE BANKSMITH AND APOTHECARY. `,
        type: "rule",
      },
      {
        text: `With preparations complete, you depart the plagued city once more. Many marches into the journey, you reach the end of the Wire Road. This is the furthest anyone has ventured into the Deepwood and the end of your lifeline to civilization. From this point forward, your life is in the hands of your A'Dendri, Guide.

Travel is slow with such a large caravan, and Guide frequently scouts ahead to spot potential danger while the group rests. On one such morning, you are attacked by a snarling, wolf-like creature. The beast is an amalgam of tree and animal with plates of bark protecting its body like a suit of armor.      `,
        type: "story",
      },
      { text: `PERFORM A ROUND OF COMBAT AGAINST DEFENSE 8.`, type: "rule" },
      {
        text: `You manage to slay the beast, but when Guide returns, she is shocked to see the corpse and releases a cloud of her spores in distress. As the spores rest on you, a sense of great sorrow and fear rushes through you. She does not communicate anymore to you, but you are sure the creature you slew was no ordinary beast of the Deepwood.

In the nights that follow, you cannot escape the feeling of being watched and the normal chittering and snarling in the darkness of the Deepwood is replaced by an eerie silence.`,
        type: "story",
      },
      {
        text: `PERFORM A SPOT CHECK (DIFFICULTY 6). ADD 1 TO YOUR RESULT IF YOU HAVE AN A'DENDRI OATHSWORN WITH YOU. IF YOU SUCCEED, ALL OATHSWORN GAIN A DEFENSE TOKEN AS YOU CATCH A GLIMPSE OF A SHADOWING FOLLOWING YOU.`,
        type: "rule",
      },
      {
        text: `Each morning, you search in vain for tracks left behind but never find any. Less experienced members of your party are convinced you are hallucinating, but your instincts tell you - you are being stalked.`,
        type: "story",
      },
      {
        text: `EACH OATHSWORN PERFORMS A SURVIVAL CHECK (DIFFICULTY 5). ALL THAT SUCCEED GAIN A BATTLEFLOW TOKEN. ALL THAT FAIL, LOSE 1 HIT POINT.`,
        type: "rule",
      },
      {
        text: `Your fears are confirmed one afternoon as your caravan passes between a pair of hollowed out tree husks. Suddenly, Cyprian's squire is yanked off the ground, up into the canopy above. You dive for cover as arrows fly, pinning the boy to a tree and then, silence. With the boy's death, no one doubts you anymore.`,
        type: "story",
      },
      { text: `ALL OATHSWORN GAIN A REDRAW TOKEN.`, type: "rule" },
      {
        text: `Once it is safe again, you can see Guide standing in front of what looks like an ancient mural on a stone slab engraved with organic looking lines. Its meaning is lost on you, but Guide is obviously disturbed by it. She tries to explain it to you, but The Knock signs she gestures are not commonly used. ..

A crown stalks the Wychwood border?'`,
        type: "story",
      },
      {
        text: `PERFORM A REASONING CHECK (DIFFICULTY 6). IF YOU HAVE AN A'DENDRI OATHSWORN, YOU IMMEDIATELY SUCCEED IN THIS CHECK. IF YOU SUCCEED, MARK THE ENCOUNTER SPECIAL RULES BOARD BOX FOR CHAPTER 10 ON YOUR FREE COMPANY SHEET.      `,
        type: "rule",
      },
      {
        text: `Whatever is out there, you need to get to the Wychwood. You sense the Wychwood cannot be far, as the environment has gradually become a mix of color and enchanting scents intermingled with the drab foulness of the Deepwood. You have also noticed several husks of A'Dendri Ancient's rotting in these lands, like scattered gravestones upon a long- forgotten battlefield. Checking your packs, you find your rations are running low.`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER:

A. Take the last rations for yourself.

ALL OATHSWORN LOSE A RANDOM COMBAT TOKEN.

B. Give the last of the rations to the expedition.

ALL OATHSWORN GAIN A REDRAW TOKEN.

ALL OATHSWORN LOSE 1 HIT POINT. `,
        type: "rule",
      },
      {
        text: `Finally, the sickly trees entwined with the brush of the Deepwood give way to an explosion of color and foliage unlike any you have seen. Between the Deepwood and the dense, green wall of the Wychwood lies a veritable 'no man's land' littered with the skeletal remains of eviscerated bioforms. Much like humanity's battle against the encroaching nightmare of trees and roots, the Wychwood is engaged in a war with the Deepwood all its own.

You press on as a low fog rolls in, and suddenly hear a scream. You turn around to see the tips of arrows protruding from the chest of an archivist. As though to stop you gaining entry to the Wychwood, your pursuer chose this moment to strike.`,
        type: "story",
      },
      {
        text: `IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 10.

IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 10.`,
        type: "rule",
      },
      {
        text: `The Forgotten King who has preyed on your party is on his knees before you. How many has he killed in his one man war against all outsiders? As you raise your weapon to finish off the great warrior, you hear the unmistakable sound of arrows being knocked into their bows. Frozen where you stand, the Wychwood suddenly comes to life.`,
        type: "story",
      },
      {
        text: `IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 10 ON YOUR FREE COMPANY SHEET.

TALLY LEVEL, LOOT AND LOSSES.`,
        type: "rule",
      },
    ],
  },
  {
    number: 11,
    name: "Chapter 11",
    sections: [
      {
        text: `As you raise your weapon above the Forgotten King, dozens of A'DendriRangers emerge from the Wychwood with arrows trained on you. Guidequickly moves to diffuse the situation, and after a careful exchange ofspores she signs to you, 'We go to Matriarch. Leaving the Forgotten Kingbowed, but not broken, you follow the envoy of Rangers across theWychwood border

As you are led deeper into the Wychwood, you see A'Dendri of all shapesand sizes, ranging from lumbering Ancients, five times larger than anUrsus, to those that fit in the palm of your hand. The trees here aremore vibrant than any you have ever seen and to witness a place so fullof life, unmolested by the rot of the Deepwood, is truly a vision tobehold.`,
        type: "story",
      },
      {
        text: `PERFORM A REASONING CHECK (DIFFICULTY 5). IF YOU SUCCEED, ALL OATHSWORNGAIN A BATTLEFLOW TOKEN AS YOU UNDERSTAND THEIR FUNCTION.`,
        type: "rule",
      },
      {
        text: `You are ordered to stay near a small pond while awaiting your audiencewith the Matriarch, when you spot an injured dog-like creature you mightbe able to help.`,
        type: "story",
      },
      {
        text: `PERFORM A SURVIVAL CHECK (DIFFICULTY 4). ADD 1 TO YOUR RESULT IF YOUHAVE AN A'DENDRI OATHSWORN WITH YOU. IF YOU SUCCEED, YOU CURE THEBIOFORM, GAIN ALLY CARD 34 (BIOFORM) AND ALL OATHSWORN GAIN AN EMPOWEREDX3 TOKEN.`,
        type: "rule",
      },
      {
        text: `Exploring the area further, you come across what used to be an enormoushall, grown out of green trees. 'Free A'Dendri built this. Before the Deepwood, Guide informs you. An old stone depicts a mural: A'Dendrifighting humans in a war long ago. 'Treekillers, Guide knocks, pointingto you. Another mural shows figures consumed by a black pool formingbeneath them, a living shadow. Before you can ask what the shadow is, agroup of Rangers arrives to bring you before the A'Dendri Matriarch.

Thick, leafy vines pull you up into the sunlight and set you down upon aplatform attached to a towering, palatial tree. Inside the Palace, theMatriarch sits atop an ornate throne of black flowers, their petalsopened to receive her majestic form. You watch an old man with a rootjutting from his back kneel before the Matriarch. As a faint stream ofspores float between them, the man begins to speak in a broken, torturedvoice, "Tree killers! You dare desecrate our land?"

At that moment, you realize you are suddenly unable to move as the Matriarch's spores settle on your skin. Her power is immense. You mustchoose your next words carefully.`,
        type: "story",
      },
      {
        text: `PERFORM A REASONING CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORNGAIN A DEFENSE TOKEN.`,
        type: "rule",
      },
      {
        text: `You quickly explain the purpose of your journey, the plague destroyingVerum. The Matriarch pauses, then releases you. She clearly has no lovefor you as "Treekillers, yet she seemswilling to help. You are told that the A'Dendri have a mother who hasbeen fighting a war of roots with the Deepwood since its beginning. They are clearly losing the battle. You are suspicious of her intentions, butthrough her mouth piece she tells you what you wanted to hear. "There is a way to stop the plague," the rasping man utters. "You will find it inthe Heart of Darkness, at the center of the rotting wood." You ask howand a single spore lands on your skin. The direction is immediately madeknown to you.

Having been granted safe passage, you plunge back into the Deepwood. Noone knew there was a center to this cursed sea of death, and now you aretraveling straight toward it. It is hard going as the underbrush becomesthicker and thicker, more intense and deadly than you have everexperienced.`,
        type: "story",
      },
      {
        text: `EACH OATHSWORN PERFORMS A SURVIVAL CHECK (DIFFICULTY 7). ALL THAT FAIL,LOSE 1 HIT POINT.`,
        type: "rule",
      },
      {
        text: `After many days travel, you come upon a massive, rocky ravine slopingtoward an ominous, dark cave. Wicked roots snake and burst from theground in every direction like a twisted prison. The very center of the Deepwood. Your heart sinks as you see what else awaits you there. Allaround the opening, a sea of fur and fangs, chitin and claws circle theopening. The great host are not attacking each other, but look to beguarding the entrance.

You have no way to get inside with your expedition. You must return toVerum with what you have learnt and form a plan. This changeseverything

As you slowly back up, a rumbling crescendo rolls in from the east

Panicked birds squawk as they take flight. Like an avalanche thunderingdown a mountaintop, a giant beast in organic gray armor barrels from thewoods. The Doom of Bastone is upon you! Running for your lives, thebeast is impossible to outpace as some of your Free Company begin totrail behind. If you die here, the truth will never reach Verum, and allwill be lost.`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER:

A. Continue running.

ARCHIVE A RANDOM COMBAT ALLY. 

B. Make sure everyone makes it. 

2 OATHSWORN LOSE 1 HIT POINT (YOUR CHOICE). `,
        type: "rule",
      },
      {
        text: `Your expedition scatters in different directions, but the beast has itssights on you. Just when it feels like you are about to be crushedbeneath a massive footfall, your flight empties into a clearing. As youturn to face the approaching beast, you see it recoil at the field'sedge and retreat back into the woods. Looking down, you realize you arestanding in a field of corpses. Human and A'Dendri soldiers arescattered everywhere, dusted in hoarfrost, perfectly preserved alongwith their equipment.`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER:

A. Loot corpses. 

REVEAL ALL CARDS FROM THE CHAPTER 11 COMMON ITEM DECK AND GAIN ANY 6 ITEMS FROM IT.

B. Get out quickly. 

REVEAL ALL CARDS FROM THE CHAPTER 11 COMMON ITEM DECK AND GAIN ANY 2 ITEMS FROM IT

ALL OATHSWORN GAIN A REDRAW TOKEN. `,
        type: "rule",
      },
      {
        text: `Within seconds, a thick fog swallows the field and your A'Dendri freezesin her tracks. Without warning, Guide raises her spear and lunges towardyou with a crazed look and unnatural strength. You manage to deflect theblow aside at the last moment and instinctively run her through. As shefalls to the ground, she reaches out to you, both terror and sorrow inher eyes

As she drops down, a living shadow remains in her stead. It reaches outfor you. You have seen this before. The mural. The living shadow.`,
        type: "story",
      },
      {
        text: `ARCHIVE ALLY CARD 23 (GUIDE). 

MARK THE ENCOUNTER SPECIAL RULES BOARD BOX FOR CHAPTER 11 ON YOUR FREECOMPANY SHEET.

OPEN MYSTERY ENVELOPE 11. 

YOU ARE AMBUSHED. MARK THE AMBUSHED BOX FOR CHAPTER 11 ON YOUR FREECOMPANY SHEET.`,
        type: "rule",
      },
      {
        text: `Your amber torches drive back the shadows, and you make it to the edgeof the hoarfrost, to where they do not seem to be able to follow. Yougather yourself and think. The Deepwood has a heart, and therein liesthe cure to the plague. You must reach Verum, and inform the King.`,
        type: "story",
      },
      {
        text: `YOU GAIN 24 IRON. 

IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALLOATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 11 ON YOUR FREECOMPANY SHEET.

TALLY LEVEL, LOOT AND LOSSES.`,
        type: "rule",
      },
    ],
  },
  {
    number: 11.5,
    name: "Chapter 11.5",
    sections: [
      {
        text: `After your discovery of the Heart of Darkness, you are on your way back to Verum. Without the Wire Road or any idea where you are, your only hope of finding home is in a strange compass with a bloody needle that you were given by the Watchers before you left. You were told it unerringly points back to Verum and will guide you through the endless green.

Not being on the Wire means you will have a tough journey ahead, and that is confirmed when you are set upon by a pack of long-limbed Snatchers that try to pluck you away from the fire on your first night.`,
        type: "story",
      },
      { text: `PERFORM A ROUND OF COMBAT AGAINST DEFENSE 9. `, type: "rule" },
      {
        text: `In the morning, you notice an addition to your camp. The 'asset' sent from Raven Spire has returned to you. He had gone missing when you reached the Wychwood, and now sits among you, carrying a wrapped package that is clearly something from the A'Dendri homeland. You ask him how he found you, to which he produces his own blood compass, this one pointing directly to you. The sight sends a chill up your spine and you change the topic. You ask him what he took, but he simply tells you, "You have your mission, and I have mine."

Returning to the march, you come across a field of spreader vines. An agonizing death, being slowly pulled apart, awaits anyone snagged in their hooks. You must be careful.`,
        type: "story",
      },
      {
        text: `EACH OATHSWORN PERFORMS A SURVIVAL CHECK (DIFFICULTY 5). ALL THAT SUCCEED, GAIN A REDRAW TOKEN. ALL THAT FAIL, LOSE 1 HIT POINT.`,
        type: "rule",
      },
      {
        text: `After several more days of travel, you hear a rumbling in the clouds, then the pitter-patter of rain as a storm breaks drenching everyone. You suspect you are someplace parallel to the Wychwood at this point, but there is no way to be sure. Gritting your teeth, you keep moving.`,
        type: "story",
      },
      {
        text: `PERFORM A SURVIVAL CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORN GAIN A +2 ANIMUS TOKEN AS YOU MANAGE TO KEEP MOST OF YOUR EQUIPMENT DRY.`,
        type: "rule",
      },
      {
        text: `The storm subsides, and another day of travel brings you to a clearing where you find human remains. A merchant caravan long lost to predators. It appears to be decades old, but there is some salvageable gear. You decide to make camp for the night.`,
        type: "story",
      },
      {
        text: `REVEAL ALL CARDS FROM THE CHAPTER 11 COMMON ITEM DECK AND GAIN ANY 4 ITEMS FROM IT.

ALL OATHSWORN GAIN A REDRAW TOKEN.`,
        type: "rule",
      },
      {
        text: `With the dawn, you are awoken by strange movement around the clearing. As you get to your feet, several pod-like plants sprout from the mulch. You have seen these before. They are Sentinels, poisonous spike-firing turrets used to defend the Wychwood border, and each of them is aimed at you. As you take up a defensive posture, an A'Dendri Grove Maiden appears before you.`,
        type: "story",
      },
      {
        text: `PERFORM A REASONING CHECK (DIFFICULTY 6). ADD 1 TO YOUR RESULT IF YOU HAVE THE RANGER WITH YOU. IF YOU SUCCEED, ALL OATHSWORN GAIN A DEFENSE TOKEN.`,
        type: "rule",
      },
      {
        text: `Grove Maidens are the architects of the A'Dendri bioforms, one of the most ancient of their race. One would never leave her unless under dire need. You look to the 'asset' who grove holds his package tightly behind his back, and before you can finish your thought, he is engulfed by dozens of sharp vines. As you struggle to help free him, the Sentinels begin to fire.`,
        type: "story",
      },
      { text: ``, type: "rule" },
      {
        text: `You subdue the Grove Maiden. The 'asset' moves to kill her, but you stand in the way. He may outrank you, and his mission may be vital to the Raven Spire, but that does not mean you have to sit idly by while he assassinates this A'Dendri for trying to reclaim what is hers. She is broken and can do no harm. You see a cold calculation pass behind his eyes and he relents without expression. You are sure he would have the same expression, had his calculation gone the other way, and he had tried to kill you. The Grove Maiden seems confused, even inquisitive that you, a 'Treekiller, would save her. As you begin to head back into the green, you can see the Grove Maiden is wrestling with a decision.`,
        type: "story",
      },
      {
        text: `YOU MAY NOW QUICKSWAP ONE MEMBER OF THE FREE COMPANY TO BECOME THE GROVE MAIDEN IF YOU CHOOSE.

DO NOT TALLY LEVEL, LOOT AND LOSSES.

GAIN A FREE COMPANY TRAIT.`,
        type: "rule",
      },
    ],
  },
  {
    number: 12,
    name: "Chapter 12",
    sections: [
      {
        text: `You arrive in Verum muddy and bloody. The city is in a After a longjourney back through uncharted Deepwood, worse state than when you left,and upon entering, you find parts of Verum's Northern outer ringcompletely overrun by the plague. Traversing the city to the Palace isnot easy, but you eventually make it through the chaos to the King'sthrone room.

Flanked by Watchers, the young King listens intently as you recount theevents which transpired in the Wychwood, and more importantly, the Heartof Darkness. When you finish, King Favian gives you his thanks and bidsyou find something light to occupy yourself with as you will no doubt beneeded again soon.

Walking back through the street, those around begin to recognize you The 'Heroes of Bastone' have become the 'Heroes of Verum' and regardlessof your failure to bring back a cure, the people look up to you with aweand expectation. A burden you never wished to bear, yet the faces of thedesperate make it hard to ignore.`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER:

A. Accept responsibility for the people. 

ALL OATHSWORN GAIN A REDRAW TOKEN. 

B. Reject responsibility for the people. 

ALL OATHSWORN GAIN A DEFENSE TOKEN. `,
        type: "rule",
      },
      {
        text: `Back at The Broken Oak, you are happy to see Greycane, Bram and Midgeagain. A days rest sees Bram convince you to try his latest concoction,which he calls "gin" and it definitely needs work. And Midge shows yousome jewelry he 'found', which you make him take back to its owner. Allis turning peaceful again, until the red raven comes

Bearing a contract tied by a red band, the raven is the sign of a new mission from the Raven Spire. The band color marks it as 'inobligatum'. Again. It asks for you by name. A small village needs protection. Youprepare for the journey, and head out.`,
        type: "story",
      },
      {
        text: `YOU MAY START A TRADE WITH THE BANKSMITH AND APOTHECARY.`,
        type: "rule",
      },
      {
        text: `By the time you reach the village a few days later, it has already beenoverrun. Not by beast, but by men. Every hut is burned and the villagershave all been slaughtered, all but one man who still clings to life."They made me send the raven," his final words

The scene is gruesome. Several villagers have been nailed to buildingswith an Oathmark carved into their bare chests. Each of the hung bodiespoints in a single direction, clearly goading you into the Deepwood. This is a message meant specifically for you. Up ahead, you hear screamsfor help, not everyone is dead. Some have been taken, you can stillfulfill your contract. Moving into the treeline, you expect a trap.`,
        type: "story",
      },
      {
        text: `EACH OATHSWORN PERFORMS A SURVIVAL CHECK (DIFFICULTY 6). ADD 1 TO ALLRESULTS IF YOU HAVE THE EXILE WITH YOU. ALL THAT FAIL, LOSE 1 HIT POINT.`,
        type: "rule",
      },
      {
        text: `Making your way carefully through the underbrush you catch sight of anetwork of platforms and rope bridges high up in the trees. Eachplatform is ramshackle and furnished with bone structures and leathershelters lit by a large central fire.`,
        type: "story",
      },
      {
        text: `OPEN MYSTERY ENVELOPE 'F' AND PLACE ITS CONTENTS IN THE CENTER OF PLAY.`,
        type: "rule",
      },
      {
        text: `This is a Scar Tribe encampment, no doubt the perpetrators behind theattack, and it seems they are holding survivors on the central platform. If you can keep the element of surprise, you might be able to take thembefore they know what hit them. Silently, you scale the trees to thefirst platform and spot dark shapes lying in wait. By fortune alone, youhave seen them first, and take the opportunity to plan your approach.`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER: 

A. Try to take out the ambushers quietly. 

PERFORM A ROUND OF COMBAT AGAINST DEFENSE 8. ANY THAT SUCCEED GAIN ANEMPOWERED X3 TOKEN.

B. Try to sneak past unseen. 

EACH OATHSWORN PERFORM A SNEAK CHECK (DIFFICULTY 4). ADD 1 TO YOURRESULT IF YOU ARE THE CUR. IF ALL SUCCEED, ALL OATHSWORN GAIN A +2ANIMUS TOKEN. IF ANY FAIL, ALL OATHSWORN LOSE 1 HIT POINT.`,
        type: "rule",
      },
      {
        text: `Past the ambush, you keep to the shadows and come to a platform where abeast is chained up. A thornhound, one of the tribe's hunting beasts. Itis currently sleeping, but will wake with the slightest noise. You needto dispose of it quietly.`,
        type: "story",
      },
      {
        text: `PERFORM A STEALTH CHECK (DIFFICULTY 6). ADD 1 TO YOUR RESULT IF YOU HAVETHE CUR WITH YOU. IF YOU SUCCEED, ALL OATHSWORN GAIN A DEFENSE TOKEN.`,
        type: "rule",
      },
      {
        text: `Sure to stay downwind of the creature, you are able to silently slit itsthroat. Moving on, you notice a large tree limb above you, hanging overthe central platform where the prisoners are held in cages. On it,sitting in a chair made entirely of human bone, is the Scar TribeChieftain.

"I KNOW YOU, MARKED ONES!" the Chieftain roars. With his powerful voice,the warrior calls on his unholy gods for vengeance as he accuses you ofslaying his kin. From this, you assume he is related to the Scar Tribeyou decimated after the fall of Bastone.

"BLOOD FOR BLOOD! FACE ME! OR SHALL I SLAUGHTER ANOTHER VILLAGE?!"

Hefting crude weapons, the Chieftain descends the throne and strides tothe cages. Brutal looking tribesman, far more armored than you wouldexpect a Scar Tribe to be, surround him like a living palisade. As theChieftain raises a spiked mace, he offers a final warning, "FACE ME, ORWATCH THEM ALL DIE SCREAMING!"`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER: 

A. Wait for an opportunity while the Chieftain kills villagers. 

MARK THE ENCOUNTER SPECIAL RULES BOARD BOX FOR CHAPTER 12 ON YOUR FREECOMPANY SHEET

GAIN ALLY CARD 35 (EMRAM).

B. Reveal yourself to save all the villagers. 

ALL OATHSWORN GAIN A REDRAW TOKEN. 

YOU WILL BE AMBUSHED. MARK THE AMBUSHED BOX FOR CHAPTER 12 ON YOUR FREECOMPANY SHEET

GAIN ALLY CARDS 35 AND 36 (EMRAM AND TIA). `,
        type: "rule",
      },
      {
        text: `You drop down onto the platform, there is not much room to maneuver anda deadly fall awaits any misstep. This is going to get bloody.`,
        type: "story",
      },
      {
        text: `IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 12.

IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 12. `,
        type: "rule",
      },
      {
        text: `The fight was close combat, and the tribe fought like cornered animals. You hope the Chieftain does not have anymore close family to avenge him. The tribe is broken and the village decimated. You hurry to free theremaining villagers, and make it out before the conflagration consumesyou.`,
        type: "story",
      },
      {
        text: `YOU GAIN 28 IRON.

IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALLOATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 12 ON YOUR FREECOMPANY SHEET

TALLY LEVEL, LOOT AND LOSSES.`,
        type: "rule",
      },
    ],
  },
  {
    number: 13,
    name: "Chapter 13",
    sections: [
      {
        text: `Several days after the conflagration at the Scar Tribe villagerecuperating in The Broken Oak. You can hear the wails from thequarantined Cobbles over the walls of the outer city ring. The plaguehas worsened and rumors abound that it is not just killing people now,it is also changing them.`,
        type: "story",
      },
      {
        text: `ALL OATHSWORN LOSE ALL INJURY CARDS, RETURNING THEM TO THE BOTTOM OF THEINJURY DECK

OPEN MYSTERY ENVELOPE 'B' AND PLACE ITS CONTENTS IN THE CENTER OF PLAY

YOU MAY START A TRADE WITH THE BANKSMITH AND APOTHECARY.

YOU MAY LOSE 10 IRON TO UPGRADE DANE. IF YOU DO, ARCHIVE ALLY CARD 3(DANE) AND GAIN ALLY CARD 38 (DANE).`,
        type: "rule",
      },
      {
        text: `A few days later a royal guard bangs on the door of The Broken Oak witha summons. A great audience is being called, and your attendance isrequested.

Joining the assembly at the Palace, you stand alongside other FreeCompanies, listening to the King address the crowd. "The plague isravaging our city. Our only hope lies in a place called the Heart of Darkness. But we cannot reach it, not without a plan. The heart issurrounded by uncounted monsters, and unless we can defeat them, we arewithout hope. 'Heroes of Bastone, tell us of The Keening."

Stepping forward, you recount your experience in Bastone to theassembly, telling them of the event which occurred just before the Deepwood came to life and the city was sacked. You explain how TheKeening of the witch was like a beacon to the creatures of the forest,and how they were drawn from miles around by her psychic howl.

Nodding, the King raises his voice above the crowd. "This is our path. If we can draw the creatures from the heart using this Keening, we couldsave Verum. I hereby order each Free Company in the realm to hunt andcollar every witch they can find. It is a bloody task, but I am certainif we do not take it, we will be ensuring the death of thousands, andthe loss of our great city. You have until the new moon. At that time,we shall march into the Heart of Darkness, witches or not. We have onlyone chance to succeed. Failure is not an option."`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER: 

A. We do it for humanity. 

ALL OATHSWORN GAIN A REDRAW TOKEN. 

B. We do it because we have to. 

ALL OATHSWORN GAIN DEFENSE TOKEN. `,
        type: "rule",
      },
      {
        text: `Tasked to find a witch for The Keening, you begin your search at BlackRock, the infamous prison of Verum. The Inquisition has no confirmedwitches at present, but tells you of a recent sighting. It seems anotherFree Company had been on the trail of a witch several days before, buthas missing. If only you can track them down. gone ` /* Check this */,
        type: "story",
      },
      {
        text: `PERFORM A REASONING CHECK (DIFFICULTY 5). ADD 1 TO THE RESULT IF THEWARDEN IS WITH YOU. IF YOU SUCCEED, ALL OATHSWORN GAIN AN EMPOWERED x3TOKEN FOR OBTAINING THE INFORMATION QUICKLY.`,
        type: "rule",
      },
      {
        text: `An inquiry with the Watchers of Raven Spire tells of the Free Company'smission: The Stone Dogs had been petitioned by a Warden to track down anescaped witch whose last sighting was in The Cobbles.

With the fate of the city at stake, you put a cloth to your mouth andenter the quarantine zone. The plague is known to be passed by touch, solong as you keep your distance from the infected you should be okay.`,
        type: "story",
      },
      {
        text: `PERFORM A SEARCH CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORNGAIN A +2 ANIMUS TOKEN FOR SPENDING AS LITTLE TIME AS POSSIBLE OUTSIDE.`,
        type: "rule",
      },
      {
        text: `You find an informant who aided the Stone Dogs. She tells you that thewitch, Marcella, defeated them, and she wants revenge on the Raven Spirefor imprisoning her.

Just as you are about to return to the search, the door is broken downby an abomination, thick black roots and bark spread over her body asshe lumbers forward, reaching out to touch you. You have seen thisbefore in Brother Marius, you cannot let her touch you.`,
        type: "story",
      },
      { text: `PERFORM A ROUND OF COMBAT AGAINST DEFENSE 7. `, type: "rule" },
      {
        text: `You manage to end the woman's suffering without being touched, and riseto hear distant alarm bells. "They are breaking through! The infected!"The quarantine is broken, the inner city walls are being attacked. Youneed to help defend the city.`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER:

A. Defend The Broken Oak. 

ALL OATHSWORN GAIN A DEFENSE TOKEN. TWO RANDOM OATHSWORN LOSE 1 HIT POINT.

B. Defend the gates. 

ALL OATHSWORN GAIN A +2 ANIMUS TOKEN. LOSE ONE RANDOM COMBAT ALLY. `,
        type: "rule",
      },
      {
        text: `The infected are attacking. Masses of twisted flesh and roots advance onthe defenses. You must buy time for the refugees to escape to the south.`,
        type: "story",
      },
      { text: `PERFORM A ROUND OF COMBAT AGAINST DEFENSE 8. `, type: "rule" },
      {
        text: `A black snow is falling as the attacks roll in, wave after wave. Youcannot protect yourself against being infected.`,
        type: "story",
      },
      {
        text: `PERFORM A SURVIVAL CHECK (DIFFICULTY 7). IF YOU SUCCEED, WRITE 'PLAGUESTAGE 1' ON YOUR FREE COMPANY SHEET. IF YOU FAIL, WRITE 'PLAGUE STAGE 2'ON YOUR FREE COMPANY SHEET.`,
        type: "rule",
      },
      {
        text: `The horde pushes you back, until you feel an enormous heat on your back.

The dried up river bed that separates the north and south of the city isbeing put to the torch and flames shoot up in the sky. The north side ofthe city is lost.

Through the chaos, you see a woman behind the horde, fire spewing fromher hands, driving the infected before her. She is responsible for theattack. Beside her, you make out a Free Company, the Stone Dogs. Theireyes are hazy, and they are clearly under some malefic power.`,
        type: "story",
      },
      {
        text: `PERFORM A SPOT CHECK (DIFFICULTY 5). ADD 1 TO YOUR RESULT IF THE WITCHIS WITH YOU. IF YOU SUCCEED, MARK THE ENCOUNTER SPECIAL RULES BOARD BOXFOR CHAPTER 13 ON YOUR FREE COMPANY SHEET

IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 13.

IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 13.`,
        type: "rule",
      },
      {
        text: `Your last blow ends the witch's life. The fighting was too fierce totake her alive. The witch may be dead, but her vengeance is not. Bellscontinue to ring throughout the city. Half the city was lost today, andalthough you secured the escape of many, there was no escape for you,you too are now infected. Sitting on a barrel north of the river, youwatch the river burn.`,
        type: "story",
      },
      {
        text: `YOU GAIN 28 IRON.

IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALLOATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 13 ON YOUR FREECOMPANY SHEET

TALLY LEVEL, LOOT AND LOSSES.`,
        type: "rule",
      },
    ],
  },
  {
    number: 14,
    name: "Chapter 14",
    sections: [
      {
        text: `Surrounded by a dozen slain infected, you sit on the docks north of theriver. You are infected. Looking down at the black spots forming on yourarms, you know it is only a matter of time before the death bell tollsfor you. You are broken from your reverie by a familiar voice fromabove. The 'asset' from the Raven Spire who took something from theWychwood stands above you. "You are not allowed to die yet, you havework to do." With that, he tosses you a green elixir and tells you todrink. "It won't cure you, but it will buy you some time and keep youfrom spreading it to others. Drink it all, there is only one dose. Nowfollow me." Doing as he says, you drink and notice the black spots onyour arms start to fade.`,
        type: "story",
      },
      {
        text: `OPEN MYSTERY ENVELOPE 'Y'. EACH OATHSWORN GAINS ONE 'PLAGUE' INJURYCARD.`,
        type: "rule",
      },
      {
        text: `Taking you through a labyrinth of tunnels, the 'asset' leads you out onthe south side of the river to where a tent city has grown on thegrounds of the Palace. In it, Bram has decorated an army tent with TheBroken Oak sign he saved from the blight, and declared it a tavern.

The loss of the witch mars your mood. There is not much time before thearmy sets off for the Heart of Darkness. You must find a witch soon, andnow your best shot is Thrace, a city of masks and slaves controlled byfive powerful families.`,
        type: "story",
      },
      {
        text: `YOU MAY START A TRADE WITH THE BANKSMITH AND APOTHECARY. 
`,
        type: "rule",
      },
      {
        text: `Gathering your gear and checking your packs you dive back into the Deepwood. You start your travel in a needle-like rain, which only growsstronger each day. After three days on the Wire, you hear a dreadedbuzzing. A burrower swarm is closing in.  `,
        type: "story",
      },
      {
        text: `EACH OATHSWORN PERFORM A SURVIVAL CHECK (DIFFICULTY 6). ALL THAT FAIL,LOSE 1 HIT POINT.`,
        type: "rule",
      },
      {
        text: `You hurry along the Wire, having to ditch your rations to distract theswarm. Then suddenly, your hand grasps nothing. The Wire is gone, and ifyou stay here the swarm will find you again. Off to your side, you spota faint light in the darkness, with no Wire in front and the swarmbehind, you follow the light.

Emerging from the woods, you see a prosperous looking village ahead. Youare met by a smiling herbalist called Nydia, who welcomes you to thevillage of Refuge, and offers to take you in for the night. In themorning, the villagers seem to be preparing for some sort of feast. Youask about the Wire Road and she replies that they have also lost theWire to Thrace, but there is a village close by that may have a map.`,
        type: "story",
      },
      {
        text: `PERFORM A SEARCH CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORNGAIN A DEFENSE TOKEN FOR NAVIGATING THE DEEPWOOD WELL.`,
        type: "rule",
      },
      {
        text: `Arriving there, you find nothing but ruins and corpses. This attack didnot happen recently, but several weeks ago. Scouring the ruins, you findno map and need to return to the village before nightfall.

The next day, Nydia tells you of a caravan that should have arrivedseveral days ago. They were carrying food, perhaps enough to get you toThrace.`,
        type: "story",
      },
      {
        text: `PERFORM A SEARCH CHECK (DIFFICULTY 5). IF YOU SUCCEED, ALL OATHSWORNGAIN A +2 ANIMUS TOKEN.`,
        type: "rule",
      },
      {
        text: `You find the caravan, but it has been attacked and there are no bodiesor food. Nydia is clearly hiding something from you, and resolve toinvestigate the village further. you Suspicions heightened, you breakinto Nydia's dwelling.`,
        type: "story",
      },
      {
        text: `PERFORM A STEALTH CHECK (DIFFICULTY 6). ADD 1 TO YOUR RESULT IF YOU HAVETHE CUR WITH YOU. IF YOU SUCCEED, ALL OATHSWORN GAIN A BATTLEFLOW TOKEN.`,
        type: "rule",
      },
      {
        text: `To your surprise you find a woman. It is Nydia's daughter who is lockedup. It seems Nydia did not want you talking to her. She manages to tellyou about a passage in the mountains to the east that holds youranswers. Before she you more, Nydia starts to wake. You slip away beforecan tell you raise an alarm. The next morning you go to find what thepassage holds.`,
        type: "story",
      },
      {
        text: `PERFORM A SEARCH CHECK (DIFFICULTY 5). IF YOU SUCCEED, ALL OATHSWORNGAIN A REDRAW TOKEN.`,
        type: "rule",
      },
      {
        text: `In the passage, you can see thick webs coating the walls. `,
        type: "story",
      },
      {
        text: `PERFORM A REASONING CHECK (DIFFICULTY 3). IF YOU SUCCEED, MARK THEENCOUNTER SPECIAL RULES BOARD BOX FOR CHAPTER 14 ON YOUR FREE COMPANYSHEET.`,
        type: "rule",
      },
      {
        text: `Peering through the milky white substance, you see bodies laying on thefloor, their chests moving up and down with their breath. You cutthrough the webs to see if they can be saved. Your answer comes as theirchests burst open, and hundreds of small spiders emerge from theirbodies.`,
        type: "story",
      },
      { text: `PERFORM A ROUND OF COMBAT AGAINST DEFENSE 8. `, type: "rule" },
      {
        text: `You manage to fight off the scuttling wave. If those were the babies,you do not want to meet the mother. Heading back, you note silk strandsin the trees leading to the village. You have hunted enough things toknow that the village should have been preyed upon by now. And yet,according to the villagers, they found a peaceful spot in the Deepwoodand have never been attacked. Something is very wrong here.

At the village, the feast is in full swing and there is merriment andale flowing. You are offered food and drink but refuse. Throughout thenight, more and more villagers try to ply you with something to eat, andrealizing their plan, you test your theory. You take a proffered cup andoffer it to Nydia. She refuses, but you insist. At that, all pretense isoff. The feast turns into a melee, they had been trying to drug you.`,
        type: "story",
      },
      {
        text: `PERFORM A ROUND OF COMBAT AGAINST DEFENSE 8. ANY THAT SUCCEED, GAIN ANEMPOWERED X3 TOKEN.`,
        type: "rule",
      },
      {
        text: `Pushed to the edge of the village, you hear the sound of many legsbehind you. Turning around, you see eight black orbs staring back. Thefeast was never for you, it was for her.`,
        type: "story",
      },
      {
        text: `IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 14.

IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 14. `,
        type: "rule",
      },
      {
        text: `With the Wandering Queen slain, the villagers start lamenting. They saywithout the Queen's protection they are doomed. It seems they had madetheir own oaths to darker things. You decide they will live with thechoices they made, as you have to live with yours. Nydia died in thebattle, but her daughter still lives. She had not been complicit in thevillage's schemes and you cannot judge her for her blood. You take herwith you and leave the village to its fate.`,
        type: "story",
      },
      {
        text: `GAIN ALLY CARD 40 (CLYDIA). YOU GAIN 32 IRON.

IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALLOATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 14 ON YOUR FREECOMPANY SHEET

TALLY LEVEL, LOOT AND LOSSES.`,
        type: "rule",
      },
    ],
  },
  {
    number: 15,
    name: "Chapter 15",
    sections: [
      {
        text: `Finding the Wire Road again you eventually make it to Thrace - The Cityof Masks. The sounds of whips greet you as a chain gang of slaves isdriven by a person in a porcelain mask. Here, only those who wear a maskare considered human, everyone else is merely the 'Faceless'`,
        type: "story",
      },
      {
        text: `OPEN MYSTERY ENVELOPE 'G' AND PLACE ITS CONTENTS IN THE CENTER OF PLAY

YOU MAY START A TRADE WITH THE BANKSMITH AND APOTHECARY. `,
        type: "rule",
      },
      {
        text: `Your best shot at finding a witch may be the Coliseum, and you head tothe great structure in the center of the city, where you know manyexotic beings are used for sport. Entering the expansive space, a waveof cheering rolls over it seems a fight is about to begin.

No witch is present today. Instead, a group of Faceless wait nervouslyin the pit below. Suddenly the far gate opens and a captive Deepwoodmonster claws its way onto the sand. With morbid curiosity, you watch asit tears through the Faceless until only a young woman remains. She hadbeen denied a weapon, yet she stands defiantly against the creature.

This is no way for someone to die. In the moment, make a choice and jumpover the edge.`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER:

A. Give the girl a weapon, and stand by her.

ALL OATHSWORN GAIN A DEFENSE TOKEN.

LOSE 1 WEAPON (YOUR CHOICE).

PERFORM A ROUND OF COMBAT AGAINST DEFENSE 9. THE THRACIAN BLADE ONLYFAILS ON 3 BLANKS.B. Fight the monster.

ALL OATHSWORN GAIN AN EMPOWERED X3 TOKEN.

PERFORM A ROUND OF COMBAT AGAINST DEFENSE 10.

THE THRACIAN BLADE ONLY FAILS ON 3 BLANKS. `,
        type: "rule",
      },
      {
        text: `The crowd roars as you slay the beast and exit the arena. Waiting in thetunnels is the woman's masked owner. He is furious, but with one look atyou and the blood still dripping I am Polus," from your weapons, hebacks away. "Thank you, the woman says. She is more than she appears,and reveals that there is an underground movement in Thrace, those whostand up to the slavery of the city. She says they have a propositionfor you.

Meeting with the underground elders they tell you that they fear one ofthe five families, the Great Masks of Thrace, are planning to kill alarge number of Faceless. They promise you a witch if you can find outwho and how. You accept the contract for more than one reason and arepointed to a masquerade ball where the five, the leaders of the greatfamilies, will be in attendance. Your Oathmark gets you in.

The masquerade is a hedonistic gathering of wine and want. All the greatfamilies are here, except one - the Pytone. You feel all conversationhalt as you pass the clustered masks, so eavesdropping will have tosuffice.`,
        type: "story",
      },
      {
        text: `PERFORM A LISTENING CHECK (DIFFICULTY 5). ADD 1 TO YOUR RESULT IF YOUHAVE THE CUR WITH YOU. IF YOU SUCCEED, ALL OATHSWORN GAIN A REDRAW TOKENFOR BEING INCONSPICUOUS.`,
        type: "rule",
      },
      {
        text: `You listen to a conversation between the Volpe and Carnedine. They aretalking of tunnels underneath the Cattedrale where the Pytone are movingsomething.

Suddenly, the great stained glass window shatters, and a man in atear-drop mask lands in the middle of the ballroom. "Rubeo," you hearfrom the gasped whispers all around. You have heard of him, a vigilantewho hunts the masked, too bloody for even the underground to accept. Heempties a sack, dropping five heads of members of the great families onthe floor.`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER:

A. Attack Rubeo.

ALL OATHSWORN GAIN AN EMPOWERED X3 TOKEN.

PERFORM A ROUND OF COMBAT AGAINST DEFENSE 9.

B. Just watch.

YOU WAIT TO SEE WHAT UNFOLDS. `,
        type: "rule",
      },
      {
        text: `Guards swarm the room and Rubeo cuts down several. He flows betweenblade forms with perfection, one killer to another, you are driven torespect the man behind the mask. He escapes through a window before theheads stop rolling.

From what you have gathered, you judge that the Pytone must be behindthe plot, and leave for the Cattedrale to investigate the tunnels. Asearch confirms your suspicion and leads you down into a confusinglabyrinth of catacombs.`,
        type: "story",
      },
      {
        text: `PERFORM A REASONING CHECK (DIFFICULTY 3). IF YOU SUCCEED, ALL OATHSWORNGAIN A +2 ANIMUS TOKEN AS YOU DO NOT GET LOST.`,
        type: "rule",
      },
      {
        text: `You find a well-guarded cavern crammed with barrels of poison. Yourealize they are trying to poison the Amiese Faceless, some family feudwhere innocents get caught in the middle. Without the manpower toovercome the heavy guard, you return to the underground elders with yourfindings. There you learn that the Pytone leader will come out of hidingfor a grand procession. You are suspicious of the timing, but have noother option. This will be your chance to gain access to him, stop theplot and secure your witch.

You arrive at the Pytone grounds with a plan to replace the Pytoneleaders guard and abduct him. Infiltrating the compound, you finduniforms and blend in. You take your places, and the procession beginsthrough the streets. That is when you hear a slow clap from within thepalanquine. "I had almost thought you wouldn't make it," the Pytonesays. This was all part of his plan. He makes it clear that if youabduct or kill him, the faceless die and besides there is something hewants more than revenge on the Amiese. He wants Rubeo. Kill Rubeo and hewill call off the culling of the faceless. "Fortunately for you," headds, "I have brought your quarry to you. Rubeo is elusive but I knewthis ill-guarded procession would draw him out," his eyes look up onto aroof, where you see the tear drop mask. "My own men have proven they arenot up to the task, but perhaps you will be. Make your decision quickly,Oathsworn. If I die, so do the faceless."`,
        type: "story",
      },
      {
        text: `PERFORM A SPOT CHECK (DIFFICULTY 3). IF YOU FAIL, YOU ARE AMBUSHED. MARKTHE AMBUSHED BOX FOR CHAPTER 15 ON YOUR FREE COMPANY SHEET.`,
        type: "rule",
      },
      {
        text: `All around you, faceless loyal to Rubeo pull daggers. The contract bindsyou, and seeing no other way to save the Amiese faceless, you drawblades.`,
        type: "story",
      },
      {
        text: `IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 15.

IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 15. `,
        type: "rule",
      },
      {
        text: `Rubeo is dead and the Pytone smiles. "You have done me a great service,Free Company. You can trust our contract, though I cannot say the samefor your patrons in the underground. Go see if they have your witch,then return to find out the truth." me when you` /* Check this */,
        type: "story",
      },
      {
        text: `YOU GAIN 32 IRON.

IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALLOATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 15 ON YOUR FREECOMPANY SHEET

TALLY LEVEL, LOOT AND LOSSES.`,
        type: "rule",
      },
    ],
  },
  {
    number: 16,
    name: "Chapter 16",
    sections: [
      {
        text: `As you wake up to a sweltering day in the City of Masks you look down atyour arms. The black spots are spreading and whatever effect the elixiris having is wearing off. The plague is growing stronger.`,
        type: "story",
      },
      {
        text: `INCREASE THE PLAGUE STAGE' NUMBER BY ONE ON YOUR FREE COMPANY SHEET

YOU MAY START A TRADE WITH THE BANKSMITH AND APOTHECARY. `,
        type: "rule",
      },
      {
        text: `When you return to the underground, you learn the Pytone had been right. There never was a witch. With no other lead, you return to the Pytonewho parades a woman on a chain in front of you. "This is what you arelooking for, I believe." The woman is heavily drugged, but as she sensesshe is not in she lashes out. The room begins to shudder. She isimmensely powerful and you dread to think what she would be capable ofwhen lucid. "Sweet of you to try, Aurelia," the Pytone coos, and forcesa vial into the woman's mouth. The power subsidies. "Aether," the Pytonesays. "You can have her and the sedative. In return, bring me the heartof the Ogre of Thrace. You consider taking the witch by force, but thedozens of guards within arms reach change your mind. Frustrated thatthis masked noble has you in his clutches once more, you agree to histerms.`,
        type: "story",
      },
      {
        text: `PERFORM A SEARCH CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORNGAIN A REDRAW TOKEN FOR PICKING UP A LEAD QUICKLY.`,
        type: "rule",
      },
      {
        text: `Hearing that the animal trainers may have some information, you head tothe Coliseum. You pass many cages with creatures when one of thembeckons you. An Ursus, kept here as a 'beast. His name is Many Winters,and he tells you that the Ogre you seek is somewhere outside the city. It recently attacked a caravan. He also asks for your help. If you canstage a fight in the arena enabling him to feign death, he can escapeand join your Free Company. You must be careful not to kill him in theprocess though.`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER:

A. Stage a fight. 

PERFORM A ROUND OF COMBAT AGAINST DEFENSE 8. IF AT LEAST ONE OATHSWORNSUCCEEDS AND NO ONE HAS A RESULT OF 10 OR MORE, GAIN ALLY CARD 42 (MANYWINTER). THE THRACIAN BLADE MAY ADD OR SUBTRACT 2 FROM HIS RESULT.

B. Leave.

ALL OATHSWORN GAIN A +2 ANIMUS TOKEN. `,
        type: "rule",
      },
      {
        text: `Traveling to where the caravan had been attacked, you arrive to see thecarnage the immense beast caused. You feel the earth shudder andsomething with the force of a rolling boulder plows through your FreeCompany.`,
        type: "story",
      },
      {
        text: `PERFORM A ROUND OF COMBAT AGAINST DEFENSE 10. 

PERFORM A SPOT CHECK (DIFFICULTY 6). IF YOU SUCCEED, MARK THE ENCOUNTERSPECIAL RULES BOARD BOX FOR CHAPTER 16 ON YOUR FREE COMPANY SHEET.`,
        type: "rule",
      },
      {
        text: `The Ogre charges into the trees. You give chase but are forced to stopbefore a sheer cliff that falls hundreds of feet into the Deepwoodbelow. The tracks lead here, had it jumped?

Without any clues, you wander the city and are startled to find the apparition of Samil. Wondering why the vision has returned now, youfollow him to a condemned manor house sealed with warnings of theoccult. Looking inside, you do not see Samil but do find it filled withstrange masks and documents. "Find the Scaravelho and find the Ogre."'offers Samil's voice. You have never heard the vision speak before. Heeding the words, you start to search the documents and eventually finda letter sealed by a Scarab. The document reveals that the Scaravelhohad been a powerful family in Thrace. So powerful, in fact, they hadeven had their own vault in the Catacombs beneath the city. 

Certain that you I will find more information within the vault, you headto the Catacombs and are met by a belligerent guard. Your Oathmarks willnot be enough to get you in here, so you must choose how to proceed.`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER:

A. Threaten him. 

PERFORM A THREATENING CHECK (DIFFICULTY 8). ADD 1 TO YOUR RESULT IF YOU HAVE AN URSUS WITH YOU. IF YOU SUCCEED, ALL OATHSWORN GAIN AN EMPOWEREDX3 TOKEN.

B. Bribe him. LOSE 30 IRON.

ALL OATHSWORN GAIN A REDRAW TOKEN. `,
        type: "rule",
      },
      {
        text: `Finally past the guard, you find vault doors for the five greatfamilies, as well as a sixth door gouged and defaced. The gouged vaultcontains more documents that evidence a sixth great family, theScaravelho, who were erased from history. Led by their patriarch,Mycelle, the family had collapsed in on itself somehow.`,
        type: "story",
      },
      {
        text: `PERFORM A SEARCH CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORNGAIN A BATTLEFLOW TOKEN AS YOU FIND MORE INFORMATION.`,
        type: "rule",
      },
      {
        text: `An old city map you find shows an ancient and very different Thrace. Ahuge sixth district stretches out to the northeast, beyond theboundaries of the current city. It is the old Scaravelho district, nowlong consumed by the Deepwood. You will find your answers there. Following the landmarks, you head into the Deepwood to the northeast ofthe city, where you find old ruins, long overgrown by plants and moss. You can feel something watching you here. You are getting close.

At the foundations of what used to be a large tower, you see Samilsitting on a stone, looking at human remains - a woman and a child in afinal embrace. "See what happened," with a wave of his arm. The scenebefore you is Samil transformed, the women and the child are coweringbehind the stone. This whole section of the city is in ruins. You canhear a growl, and see the Ogre of Thrace break through the forest,striking the two down. As she falls, the woman screams at the oncomingbeast. "Mycelle, No...!" The vision ends. Had Mycelle become the Ogre ofThrace? Wondering how that is possible, you come to a clearing and acircle of nine standing stones. Suddenly, you hear a legion of voicesringing all around you. The voices are coming from the stones."Oathsworn. Mycelle fed us to become eternal, and we made him so. Whatboon do you crave?"`,
        type: "story",
      },
      {
        text: `CHOOSE ONE: 

A. Ask for power.

ALL OATHSWORN GAIN AN EMPOWERED X3 TOKEN. ARCHIVE A RANDOM COMBAT ALLY.

B. Ask for life.

ALL OATHSWORN LOSE 1 HIT POINT. DECREASE THE 'PLAGUE STAGE' ON YOUR FREE COMPANY SHEET BY ONE. 

C. Ask for nothing. 

YOU ASK FOR NOTHING FROM THE VOICES. 

IF YOU CHOSE TO ASK FOR POWER OR LIFE, YOU ARE AMBUSHED. MARK THEAMBUSHED BOX FOR CHAPTER 16 ON YOUR FREE COMPANY SHEET.`,
        type: "rule",
      },
      {
        text: `Your exchange with the voices over, the clearing returns to darkness andyou hear a growl coming closer. This time it is real. Mycelle, the Ogreof Thrace, warped and twisted by whatever power lies within the stonesbursts into view. Great scabs armor his immense form and with a roar hebarrels toward you.`,
        type: "story",
      },
      {
        text: `IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 16.

IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 16. `,
        type: "rule",
      },
      {
        text: `You remove the Ogre's heart as instructed. Somehow, the organ stillbeats. Returning the coveted item to the masked noble, you are given thereward you were promised. The witch, Aurelia, along with the aether. Gathering her shackles, as well as the vials to keep her under control,you prepare to head back to Verum. The grim reality of The Keening risesin your mind, and you begin to wonder if you will be able to carry thedeed out when the moment arrives.`,
        type: "story",
      },
      {
        text: `YOU GAIN 36 IRON.

IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALLOATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 16 ON YOUR FREECOMPANY SHEET

TALLY LEVEL, LOOT AND LOSSES.`,
        type: "rule",
      },
    ],
  },
  {
    number: 17,
    name: "Chapter 17",
    sections: [
      {
        text: `With the witch, Aurelia, in tow you can finally make your way back toVerum. It is hard to look upon the woman. She is not just a target, sheis a person, and you hope an alternative to The Keening can be foundbefore you get to the Heart of Darkness. You learned long ago however,that hope is dangerous ground to stand on. On your way to Thrace's gate,you stop off at the merchants district for supplies.`,
        type: "story",
      },
      {
        text: `YOU MAY START A TRADE WITH THE BANKSMITH AND APOTHECARY. `,
        type: "rule",
      },
      {
        text: `Plunging into the Deepwood, once more you grip the Wire Road and putyour head down into the long march. Rain pelts you for days, and onlyintensifies the closer you get to the cut section of the Wire Road. Youremember the detour you had been forced to take into the village ofRefuge, whose inhabitants had tried to sacrifice you to the WanderingQueen. You will have to find that village again to regain the Wire, andknow it lies on the far side of the mountain range to the west. Checkingyour compass, you look up to face a swirling vortex. It is becoming apowerful storm. Sure of your heading, you let your hand slip from theWire and head toward the village.

You can barely take one step after another. Branches crack and rainlashes your face. The noise is deafening. Suddenly, it all dies down andyou taste iron in your mouth. Looking at the back of your hands, you seecrimson droplets splashing. Blood. It is raining blood. All thoughts ofthis being a natural storm flee your mind and one conclusion takes itsplace. This storm is powered by the malefic.`,
        type: "story",
      },
      {
        text: `PERFORM A SPOT CHECK (DIFFICULTY 5). IF YOU SUCCEED, ALL OATHSWORN GAINA DEFENSE TOKEN AS YOU REALIZE SOMETHING IS FOLLOWING YOU.`,
        type: "rule",
      },
      {
        text: `Red mist rises and you find yourself in another place, a mirror versionof the Deepwood. Then it comes from the edge of your vision, a beastwhich is hard to describe, translucent but seemingly made out ofshifting swirls of blood. It emanates a palpable aura of revenge, and asit draws closer, a giant claw down toward sweeps you.`,
        type: "story",
      },
      {
        text: `ONE RANDOM OATHSWORN LOSES 1 HIT POINT.

PERFORM A ROUND OF COMBATAGAINST DEFENSE 8.`,
        type: "rule",
      },
      {
        text: `The claw moves right through you, and as it does you see imagesflickering in your mind. The village. The eye of the storm. Whateverthis is, it comes from there. There was something else in that vision. Death. Everyone in the village was dead. Whatever is happening there,you need to get there and end it

As pain lances through you, the blood on your face is replaced withmurky rain water, with the wind picking up and the trees around youcreaking. You are back in the storm in Deepwood, in reality. You canstill feel the Blood Fiend just beyond the veil hunting you. Vowing toput as much distance as possible between you and that thing, you graspyour compass tighter and move out.`,
        type: "story",
      },
      {
        text: `EACH OATHSWORN PERFORMS A SURVIVAL CHECK (DIFFICULTY 5). ANY THATSUCCEED, GAIN AN EMPOWERED X3 TOKEN AS YOU HOLD YOUR WAY.`,
        type: "rule",
      },
      {
        text: `After another hour of trudging through the ever increasing storm, youfeel the familiar taste of iron on your tongue. The Blood Fiend hasfound you.`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER:

A. Stand your ground and fight. 

PERFORM A ROUND OF COMBAT AGAINST DEFENSE 9.

ALL OATHSWORN GAIN A REDRAW TOKEN.

B. Try to shake it off. 

EACH OATHSWORN PERFORMS A SURVIVAL CHECK (DIFFICULTY 6). ANY THAT FAIL,LOSE 1 HIT POINT

ALL OATHSWORN GAIN A +2 ANIMUS TOKEN. `,
        type: "rule",
      },
      {
        text: `The vaguely humanoid fiend emerges from the Deepwood, fifteen feet highand formed from blood. As you battle it, another vision comes. You seethe bodies of hundreds laid in concentric circles around a woman with araised dagger. The blood is flowing past her into a dead figure lying onthe ground. As you exert all your will upon the vision, you scream andthe image shatters.

As before, blood is replaced by water, and you are freed from 'the otherplace' once more. In that final moment, you had seen something. The deadfigure had begun to move.

You recognize the village before you, even through the rain. Wherehouses once stood there is now rubble. Where the central building stood,you see a whirlwind of shattered remains circling high up into the sky. The storm itself is trying to hold you, keep you from getting there.`,
        type: "story",
      },
      {
        text: `PERFORM A MIGHT CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORN GAINAN EMPOWERED X3 TOKEN AS THE STORM FAILS TO SLOW YOU.`,
        type: "rule",
      },
      {
        text: `Each step becomes harder as the storm tears at you, but you breakthrough. You can see the rings of bodies and the silhouette of a womaninside. Beside her is an altar of bone and upon that altar sits anabomination.`,
        type: "story",
      },
      {
        text: `PERFORM A REASONING CHECK (DIFFICULTY 6). ADD 1 TO YOUR RESULT IF YOUHAVE THE EXILE WITH YOU. IF YOU SUCCEED, MARK THE ENCOUNTER SPECIALRULES BOARD BOX FOR CHAPTER 17 ON YOUR FREE COMPANY SHEET.`,
        type: "rule",
      },
      {
        text: `As you close on it, you can see the thing more clearly. Contorted andtwisted with one great claw and spikes jutting from its back, it isneither man nor beast. It is, however, familiar. It is the Scar TribeChieftain, reanimated by the Shaman you had fought in the tree tops onlyweeks before. The Shaman smiles as she sees her plan coming to fruition. She had followed you, had known you would return here, and laid a trapfor you. The storm, the Blood Fiend, and this resurrection all for onepurpose. To see you dead. To get revenge. She screams in ecstasy as theshadows elongate around you and the Chieftain advances.`,
        type: "story",
      },
      {
        text: `ALL OATHSWORN PERFORM A SURVIVAL CHECK (DIFFICULTY 5). ALL THAT FAILLOSE 1 HIT POINT.

IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 17.

IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 17. `,
        type: "rule",
      },
      {
        text: `The Chieftain lies in ruins, with the Shaman not far off. The two ofthem nearly succeeded in their desire to end you. When you finallyfelled the Shaman, the storm unraveled. The shadows returned to theirnatural state and the sun finally peeked from behind the clouds.

Making sure they can never rise again, you burn the bodies and thecursed village to the ground, drying yourself by the purifying fires. The only good in all this has been that your Thracian witch, Aurelia, isunharmed. Still under the effects of the aether, you get her to her feetand lead her to the Wire Road to Verum. Now the hard part begins.`,
        type: "story",
      },
      {
        text: `YOU GAIN 36 IRON.

IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALLOATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 17 ON YOUR FREECOMPANY SHEET

TALLY LEVEL, LOOT AND LOSSES.`,
        type: "rule",
      },
    ],
  },
  {
    number: 18,
    name: "Chapter 18",
    sections: [
      {
        text: `You arrive back in Verum to find the Inquisition waiting for you. Relieving you of the witch, Aurelia, they commit a Warden to watch overher while you prepare for what is to come. In only a few days the armywill muster and the greatest crusade into the Deepwood for hundreds ofwill begin. A crusade you will lead.

Heading for the Palace you weave your way through the vast expanse ofrefugees from north of the river and enter the army tent that is now thethird iteration of The Broken Oak. Cheers go up at your return and,taking your seats, an Apothecary sent by the crown goes to work on yourinjuries.`,
        type: "story",
      },
      {
        text: `ALL OATHSWORN LOSE ALL INJURY CARDS (EXCEPT THE PLAGUE CARD), RETURNINGTHEM TO THE BOTTOM OF THE INJURY DECK.`,
        type: "rule",
      },
      {
        text: `You can feel the plague within you grow and fester. You cannot spreadit, but also do not know how long you will last. If you can just reachthe Heart of Darkness and find the cure...`,
        type: "story",
      },
      {
        text: `INCREASE THE NUMBER NEXT TO 'PLAGUE STAGE' ON YOUR FREE COMPANY SHEET BY1.`,
        type: "rule",
      },
      {
        text: `With the time at hand the muster begins. You will invoke The Keening byburning the witch and gain access to the Heart of Darkness, the verycenter of the Deepwood, to find a cure for everyone. You sit withGreycane, Bram and Midge for what you know might be the last time andshare a meal of sausages, eggs, yams and fresh bread. "The best Verumhas to offer for the best Verum has to offer," Greycane says pointing tothe plates and then to you.`,
        type: "story",
      },
      { text: `ALL OATHSWORN GAIN A REDRAW TOKEN. `, type: "rule" },
      {
        text: `After your meal, Midge breaks the silence. He wants to come with He hasbeen with since the start. Though you you. you know the mission will bea one-way trip, you accept him. He is not a boy anymore, he has growninto a young man these past months. The choice is his to make.`,
        type: "story",
      },
      {
        text: `YOU MAY START A TRADE WITH THE BANKSMITH AND THE APOTHECARY.

IF YOU HAVE ANY OF THE FOLLOWING ALLY CARDS, ARCHIVE THEM AND GAIN THEUPGRADED ALLY CARD

SWAP ALLY CARD 17 FOR 43, ALLY CARD 18 FOR 44, ALLY CARD 21 FOR 46, ALLYCARD 19 FOR 47.`,
        type: "rule",
      },
      {
        text: `The army soldiers clad in steel is gathered before a dais in front ofthe Palace. You stand behind the King for his speech. He does not makelight of the efforts. There are no promises of glorious deeds or arighteous return. Instead, it is a testament to the strength and honorof those who are willing to risk everything to protect their friends,their families and Verum itself.

As the King introduces you to the army, it is your turn to make aspeech.`,
        type: "story",
      },
      {
        text: `PERFORM A REASONING CHECK (DIFFICULTY 4). IF YOU SUCCEED ALL OATHSWORNGAIN AN EMPOWERED X3 TOKEN AS YOU ENCOURAGE THE MEN AND WOMEN BEFOREYOU.`,
        type: "rule",
      },
      {
        text: `You tell the army to keep alert and stay in formation. They have onetask, to keep faith and keep it together. As you step down from thedias, weapon shafts pound the flagstone in a military 'hooah'. They areready.

The army rolls out. Many soldiers touch Verum's walls one last time asthey take hold of the Wire and let the shadows of the canopy consumethem. You know the best way to lead is from the front, so you take upthe vanguard and lead the soldiers into the Deepwood. Your first stopwill be the Salt Tower, an ancient fortification halfway between Verumand your target, Raven's Reach. The Watchers have decreed that Raven'sReach would be the site of The Keening, a defensible position that isclose to the Heart of Darkness. If all goes well, you will be able todraw the monsters circling the heart away from the entrance and gainaccess.`,
        type: "story",
      },
      {
        text: `PERFORM A LISTENING CHECK (DIFFICULTY 5). IF YOU SUCCEED, ALL OATHSWORNGAIN A DEFENSE TOKEN FOR KEEPING THE ARMY ALERT.`,
        type: "rule",
      },
      {
        text: `As the days stretch, the journey gets harder. The Deepwood reactsheavily against such a massive group of life moving through it. You arefaced with a choice to pick up the pace or not.`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER:

A. Move fast and keep up morale.

PERFORM A ROUND OF COMBAT AGAINST DEFENSE 11.

ALL OATHSWORN GAIN A REDRAW TOKEN.

B. Move slow and safe.

PERFORM A ROUND OF COMBAT AGAINST DEFENSE 9. `,
        type: "rule",
      },
      {
        text: `The deeper you delve, the more monsters you awake. Wyrm attacks become adaily occurrence, and only a dwindling supply of amber bombs keep the Deepwood at bay. By the second week, the amber bombs are gone. As theattacks continue, men are pulled from the line by plants and beasts andit is all you can do to hold the army together.`,
        type: "story",
      },
      { text: `TWO RANDOM OATHSWORN LOSE 1 HIT POINT EACH. `, type: "rule" },
      {
        text: `Then you spot it, rising above the twisted trees: The Salt Tower. Youonly need to push your wounded army a bit further.`,
        type: "story",
      },
      {
        text: `PERFORM A LISTENING CHECK (DIFFICULTY 5). IF YOU FAIL, YOU ARE AMBUSHED. MARK THE AMBUSHED BOX FOR CHAPTER 18 ON YOUR FREE COMPANY SHEET.`,
        type: "rule",
      },
      {
        text: `As you reach the base of the tower walls, the ground rumbles hard enoughto make you stumble. As if trying to stop you reaching your destination,a great beast rises from the depths. What bursts from the earth is likeno Wyrm you have ever seen. An ancient black hide covers it and greattusks jut from its enormous maw. Worse still, it is among the soldierswhere Midge was. Sure enough, you see him bravely slashing at the flankof the great beast. As the Wyrm writhes, you lose sight of him oncemore.`,
        type: "story",
      },
      {
        text: `PERFORM A REASONING CHECK (DIFFICULTY 4). IF YOU SUCCEED, MARK THEENCOUNTER SPECIAL RULES BOARD BOX FOR CHAPTER 18 ON YOUR FREE COMPANYSHEET.`,
        type: "rule",
      },
      {
        text: `Wyrm hide is thinner on top, if you can get enough soldiers into theSalt Tower they can rain down fire from above and help bring this thingdown. By saving the soldiers, you may also save Midge. Drawing weapons,you charge into the fray.`,
        type: "story",
      },
      {
        text: `IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 3.

IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 3. `,
        type: "rule",
      },
      {
        text: `You drag yourselves into the Salt Tower and check on your witches. Finding them safe, you command the army to rest. Your army isdiminished, and you are only halfway to your destination. You hope therest have what it takes to get to Raven's Reach.`,
        type: "story",
      },
      {
        text: `IF 5 OR MORE SOLDIERS DIED IN THE ENCOUNTER, ARCHIVE ALLY CARD 1(MIDGE)

IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALLOATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 18 ON YOUR FREECOMPANY SHEET

TALLY LEVEL, LOOT AND LOSSES.`,
        type: "rule",
      },
    ],
  },
  {
    number: 19,
    name: "Chapter 19",
    sections: [
      {
        text: `You have reached the Salt Tower whose cold stone walls give you amoment's respite on your crusade. Among the stores, your men findseveral usable items and deep wells to refresh your water supplies.`,
        type: "story",
      },
      {
        text: `ALL OATHSWORN GAIN AN EMPOWERED X3 TOKEN.

REVEAL ALL CARDS FROM THE CHAPTER 19 COMMON ITEM DECK AND GAIN ANY 4ITEMS FROM IT.`,
        type: "rule",
      },
      {
        text: `Slinging your packs on your backs, you head out on the last leg of yourjourney toward Raven's Reach. The Deepwood is getting thicker and noisesof scuffling and scraping can be heard off in the dark on all sides. Therain falls and the tension builds as though the unseen creatures werewaiting for something. As the march goes on you come to high walls. Thisis not Raven's Reach, but a city a Watcher had told you of beforedeparting. Raven's Reach lies just beyond this city, but the Watcher hadbeen insistent on you not entering. It had said the city was forbidden. Neither you, nor your captains, had wanted to question the cowled figureso you made plans to skirt around the northern edge. As you come to thatpoint though, you realize that may not be possible as the Deepwood comesalive.`,
        type: "story",
      },
      { text: `PERFORM A ROUND OF COMBAT AGAINST DEFENSE 8.`, type: "rule" },
      {
        text: `Waves of corrupt life crash into your lines. Again and again, you repelthem, but they keep on coming, clawing over their dead to reach you. Forming a semicircle around the city gate, you realize this could beyour last stand. Turning to the gate, you hammer on its barred entrance. Whatever is inside, it cannot be worse than dying out here. Your effortsare to no avail though, the way is shut. Then you hear a creaking. Acrack of light appears in the door, revealing Samil's face, as he pushesthe great gates open. You do not know how he is doing it or if you cantrust the apparition of your dead companion, but he has saved you. Youorder the retreat just as a huge Broodmother Matriarch barrels throughthe horde toward you. If she reaches the gate, you may never get itclosed.`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER:

A. Rush in and close the gates, leaving most soldiers outside.

ALL OATHSWORN LOSE A RANDOM COMBAT TOKEN.

B. Defend the gate until the last moment. 

PERFORM A ROUND OF COMBAT AGAINST DEFENSE 9.

ALL OATHSWORN GAIN A REDRAW TOKEN. `,
        type: "rule",
      },
      {
        text: `The Broodmother screeches as you heave the gate closed and the soundsbeyond become muffled. Turning, you are greeted with the worst sound inthe Deepwood, an eerie silence. The city is ancient and wreathed inmist. Only the dead stare up at you, preserved in an eternal hoarfrost. You have seen the like before, when you encountered the Shadowman. Feargrips the army, you cannot exit where you entered, and will need tocross to the other side. Lighting torches, you walk into the mist.`,
        type: "story",
      },
      {
        text: `PERFORM A SURVIVAL CHECK (DIFFICULTY 5). IF YOU SUCCEED, ALL OATHSWORNGAIN A DEFENSE TOKEN FOR FINDING A GOOD PLACE TO SHELTER.`,
        type: "rule",
      },
      {
        text: `You find a place to camp with an ever dwindling number of soldiers, andlight the area well as night falls. You can feel the shadows moving. Curling fingers, reaching out for you and your soldiers.`,
        type: "story",
      },
      { text: `PERFORM A ROUND OF COMBAT AGAINST DEFENSE 10. `, type: "rule" },
      {
        text: `Not everyone who went to sleep is alive when you wake. Rousing the army,you try to find a path through the city, and find that the place is farbigger than you thought.`,
        type: "story",
      },
      {
        text: `PERFORM A REASONING CHECK (DIFFICULTY 6). IF YOU SUCCEED, ALL OATHSWORNGAIN A BATTLEFLOW TOKEN FOR NAVIGATING THE CITY RUINS.`,
        type: "rule",
      },
      {
        text: `You find strange mechanical sculptures, machines and ornate buildings. This city was far more magnificent than any city under The Pact. At itscenter you find a grand spire reaching up high into the sky. Entering,you find at the very top of the tower, a cloaked skeleton sitting at anornate desk with a hand on a book. A skeleton that was once a Watcher. Taking the book, you read.

The journal is fragmented and rotten. It reads as a confession. AWatcher named Liak visited Kharnus and Soonari, the mother and father ofthe A'Dendri, under the guise of a diplomatic mission. He stolesomething called the Life Giver... a seed? After that, a war startedthat stretch on for many years. The Watchers had planned for it, and theA'Dendri were losing. Then something happened. Something airborne came,and all the citizens of the city went mad, all except the Watchers. In aday of blood, the mad killed one another and the city died. Then the Deepwood came.

The entry ends, and a sound draws you to a balcony. Off to the north,you can see a great host of creatures moving beyond the wall. Those thathad attacked you at the gate are moving around the city walls. They aretrying to cut you off.`,
        type: "story",
      },
      {
        text: `EACH OATHSWORN PERFORM A STAMINA CHECK (DIFFICULTY 4). ANY THAT SUCCEED,GAIN A +2 ANIMUS TOKEN.`,
        type: "rule",
      },
      {
        text: `Rushing through the city with what remains of your army, you reach thegate and dive back into the Deepwood. You can hear them, not far off andclosing fast. As it feels like they are on top of you, the walls ofRaven's Reach emerge before you.`,
        type: "story",
      },
      {
        text: `PERFORM A SPOT CHECK (DIFFICULTY 3). IF YOU SUCCEED, MARK THE ENCOUNTERSPECIAL RULES BOARD BOX FOR CHAPTER 19 ON YOUR FREE COMPANY SHEET. IFYOU FAIL, YOU WILL BE AMBUSHED. MARK THE AMBUSHED BOX FOR CHAPTER 19 ONYOUR FREE COMPANY SHEET.`,
        type: "rule",
      },
      {
        text: `Just as you reach the gate, the hulking form of the BroodmotherMatriarch crashes in front of you. With arm length incisors and anundulating back of swarming pups she is a terrifying sight. You do notmiss a step, continuing your charge you know your survival, and thesurvival of all in Verum, lies on the other side of this beast.`,
        type: "story",
      },
      {
        text: `IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 1.

IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 1. `,
        type: "rule",
      },
      {
        text: `With the Broodmother Matriarch slain, what is left of your decimatedarmy piles into Raven's Reach. There are only a few of you now, but itwill have to be enough. The host will return soon and in greaternumbers. You have to perform The Keening and get to the Heart ofDarkness.`,
        type: "story",
      },
      {
        text: `IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALLOATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 19 ON YOUR FREECOMPANY SHEET

TALLY LEVEL, LOOT AND LOSSES.`,
        type: "rule",
      },
    ],
  },
  {
    number: 20,
    name: "Chapter 20",
    sections: [
      {
        text: `Barring the great gate of the ancient fortress of Raven's Reach, youtake in your surroundings. Her walls are high and towers strong. Thereis no better place to defend while performing the Keening, but yournumbers have dwindled. Now a few dozen dirty, weary men and women standin the rain awaiting your command. They are not defeated however and youcan see the same light in their eyes that you know they see in yours. Failure is not an option. You must perform The Keening to draw themonsters protecting the Heart of Darkness away while you get inside.

The Deepwood is a cacophony of screeches, snorts and howls. They will becoming soon and the only thing that will stop them swarming yourposition will be those at your side. Barking commands, you order some tobolster the defenses, while others prepare the pyre. It must be the sameas Bastone and you have to hold out long enough to make sure you draw inall the beasts protecting the Heart of Darkness.`,
        type: "story",
      },
      {
        text: `OPEN MYSTERY ENVELOPE 'H' AND PLACE ITS CONTENTS IN THE CENTER OF PLAY

REVEAL ALL ITEMS FROM THE CHAPTER 20 COMMON ITEM DECK AND GAIN ANY 4ITEMS FROM IT.`,
        type: "rule",
      },
      {
        text: `Whilst the army prepares, you look down at your arm. The black spotshave become roots now, curling around you, reaching up to your shoulder. The pain is getting worse, you do not have long.`,
        type: "story",
      },
      {
        text: `INCREASE THE PLAGUE LEVEL BY ONE ON THE FREE COMPANY SHEET. IF ITALREADY IS AT 3, EACH OATHSWORN LOSES A COMBAT TOKEN (YOUR CHOICE).`,
        type: "rule",
      },
      {
        text: `A guard calls out through the rain, something is coming. Has the attackbegun? A streak of lightning illuminates a large avian silhouetteperched on a tower, its eyes glowing as they gaze at you. What is one ofthe enigmatic Avi doing here? Suddenly, an ephemeral voice sounds inyour head.

"The Darkness calls your name. We hear it also. As above, so below.

The end of paths draws near, where madness is reason, and reason madness.

Darkness or death will be your choice. And your choice it will be. No others.

Choose wisely, marked ones, for the world turns on it," You demand the Avi explain itself, but you are met only by silence. Another flash of lightning sees the Avi disappear.`,
        type: "story",
      },
      { text: `ALL OATHSWORN GAIN A REDRAW TOKEN. `, type: "rule" },
      {
        text: `As the thunder rolls, it is overshadowed by another sound. Thescrabbling and thudding of thousands of feet. The gate nearly buckles asthe first wave hits. You can hear them on all sides, trying to climb thewalls. Spears arc down into the oncoming tide as they scale the wetstones. Fur and fang are met with cold steel and iron wills. With thepyre still being built, you bellow one last command and join the fray.`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER:

A. Defend all points.

ALL OATHSWORN GAIN A DEFENSE TOKEN. 

PERFORM A ROUND OF COMBAT AGAINST DEFENSE 10 ANY THAT FAIL, LOSE ACOMBAT TOKEN AS WELL AS A HIT POINT

ARCHIVE 2 RANDOM COMBAT ALLIES.

B. Focus defenses on a few points. 

PERFORM A ROUND OF COMBAT AGAINST DEFENSE 9 - ALL OATHSWORN THAT SUCCEEDAND CRITICAL GAIN AN EMPOWERED X3 TOKEN

ARCHIVE 1 RANDOM COMBAT ALLY. `,
        type: "rule",
      },
      {
        text: `No cry of victory goes up as you repel the first wave. Everyone knows itwill not be the last. Even the Deepwood trees seem to reach out for thewalls as though to crush the invaders who dare enter its domain. Lookingto the pyre, you see it will take more time. You need to hold the line alittle longer.

Your eyes move to the witches in your charge and you see Aurelia, thewitch you brought from Thrace. Her eyes are moving behind their lids. You reach for the aether before remembering you have none left. All youcan do is hope she does not wake up.

Turning your attention to your defenses, you have a choice to make. Asthe sound of another wave approaches, you must either draw back to theinner bailey or continue to hold the battlements.`,
        type: "story",
      },
      {
        text: `CHOOSE EITHER:

A. Abandon the battlements and draw back to the inner bailey.

ALL OATHSWORN LOSE 1 HIT POINT.

ALL OATHSWORN GAIN A BATTLEFLOW TOKEN.

B. Keep defending the battlements.

PERFORM A ROUND OF COMBAT AGAINST DEFENSE 9.

IN EITHER CASE, ARCHIVE 2 RANDOM COMBAT ALLIES. `,
        type: "rule",
      },
      {
        text: `Soaked in rain and the blood of your enemies, you hack and slash atcountless nightmares of the Deepwood. Just as you feel your strengththreatening to fail you, the wave breaks. You cannot rest however,drawing deep, and using this lull in the fighting, you race to thecompleted pyre.`,
        type: "story",
      },
      { text: `ALL OATHSWORN GAIN A +2 ANIMUS TOKEN. `, type: "rule" },
      {
        text: `You had hoped it would not come to this, but at the end of it all therehad been no other way. With Aurelia bound to the pyre, you spark anamber torch. The least you can do is bear this burden yourself. As youset light to the pyre, you stare into the Thracian witch's face - thenyou freeze.

She is staring back at you. She is awake!

You land ten feet away as an explosion of kinetic force erupts from thewitch's body. Aurelia lets out a scream of rage, and the pyre is tornasunder. The flames are immediately extinguished and the remains of theother witches are scattered to the walls by waves of force. Aureliarises from the ruin of the pyre, and you can see the rain striking animbus of shimmering air rolling around her, in a sphere of telekineticprotection. You have faced potent witches before, but this woman mightbe the most powerful ever recorded. Hovering above the ground, insideher kinetic bubble, you see the wrath in her eyes. She had been druggedand dragged through the Deepwood and she does not know what ishappening. The only thing she does know, is that for the first time sheis free of the delirium, and she means to exact her revenge.`,
        type: "story",
      },
      {
        text: `PERFORM A SURVIVAL CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORNGAIN AN EMPOWERED X3 TOKEN FOR STANDING STRONG.`,
        type: "rule",
      },
      {
        text: `The few remaining soldiers charge Aurelia, but to no avail. With a handgesture, she raises the men and women into the air, and crushes themagainst flagstone. What rises then are corpses that start to swirlaround Aurelia in a macabre pattern. Now it is just you and the witch.`,
        type: "story",
      },
      {
        text: `PERFORM A REASONING CHECK (DIFFICULTY 5). ADD 1 TO YOUR RESULT IF YOUHAVE THE WITCH. IF YOU SUCCEED, MARK THE ENCOUNTER SPECIAL RULES BOARDBOX FOR CHAPTER 20 ON YOUR FREE COMPANY SHEET

IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 20.

IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 20. `,
        type: "rule",
      },
      {
        text: `With her last breath, the witch lets out a psychic scream that shredsyour senses. You have heard this before. The Keening. Against all odds,it has worked. Wiping blood from your ears, you rush to escape Raven'sReach before what happens next. In the distance, you hear a deeprumbling and you know what that means. The way to the Heart of Darknessis open.`,
        type: "story",
      },
      {
        text: `IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALLOATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 20 ON YOUR FREECOMPANY SHEET

TALLY LEVEL, LOOT AND LOSSES.

GAIN NEW UNIQUE ITEMS AS USUAL, BUT DO NOT GAIN ANY NEW COMMON ITEMSDURING LOOTING.`,
        type: "rule",
      },
    ],
  },
  {
    number: 21,
    name: "Chapter 21",
    sections: [
      {
        text: `Finding a tunnel that leads out beyond the walls, you collapse the waybehind you and charge on through the darkness. Not far in, you find thecorpses of the last defenders of Raven's Reach. Their bodies aredecayed, but their equipment still gleams in the darkness.`,
        type: "story",
      },
      {
        text: `REVEAL ALL CARDS FROM THE CHAPTER 19 AND 20 COMMON ITEM DECKS - YOU MAYGAIN UP TO 8 ITEMS FROM THEM (YOUR CHOICE). IF YOU TAKE 4 OR LESS, ALLOATHSWORN GAIN A REDRAW TOKEN.`,
        type: "rule",
      },
      {
        text: `You come out in the Deepwood, and turn to see the Doom of Bastonedecimating the walls of Raven's Reach, at the head of an endless host ofhorrors. The full wrath of the Deepwood is being emptied onto thefortress, and it is being torn to pieces under the weight of hooves,claws, tails and teeth. Wasting none of the precious time that has beenso dearly bought, you head the other way to the cave where all theanswers await.

Stepping from the Deepwood, you look down into the pitch black ravineonce again. This time the way is clear, and no monsters block your path. Making your way to the great cave mouth of stone and root, you steelyour resolve and step into darkness.`,
        type: "story",
      },
      { text: `ALL OATHSWORN GAIN AN EMPOWERED X3 TOKEN. `, type: "rule" },
      {
        text: `Roots surround you on all sides, and every step you take in thisforsaken place makes your skin itch more. You can see the growths onyour skin expanding rapidly, as if reacting in proximity to thisforsaken place.`,
        type: "story",
      },
      {
        text: `CHANGE THE NUMBER NEXT TO YOUR 'PLAGUE STAGE' ON YOUR FREE COMPANY SHEETTO 3.`,
        type: "rule",
      },
      {
        text: `Heading down dark tunnels of root and stone, hallucinations form in thefetid air. Fiends you have fought, and things you have only seen in yournightmares, slither and crawl toward you.`,
        type: "story",
      },
      {
        text: `EACH OATHSWORN PERFORMS A SURVIVAL CHECK (DIFFICULTY 5). ANY THATSUCCEED, GAIN A DEFENSE TOKEN AS YOU STAY CALM.`,
        type: "rule",
      },
      {
        text: `You shake yourself out of it. This is just an illusion and you will notlet it overwhelm you. The words that were spoken on the day you took theOath resound in your head like the drumbeat of war, giving you clarityand purpose.

Today you take your stand.

Today you join the line.

The first and last line.

The line of the glorious dead.

None have broken it.

Will you be the first?

Moving deeper still, a terrible feeling of sickness and corruptionwashes over you, the world suddenly twisting away. The walls begin toclose in around you as roots reach out to bind your arms and squeezeyour chest, slithering into your eyes and mouth. You can feel thediseased tree inside you, crushing and choking, strangling you fromwithin.`,
        type: "story",
      },
      {
        text: `EACH OATHSWORN PERFORMS A REASONING CHECK (DIFFICULTY 5). ANY THATSUCCEED, GAIN A BATTLEFLOW TOKEN AS YOU HOLD ON TO REALITY.`,
        type: "rule",
      },
      {
        text: `Another illusion, and again, the words of your Oath come to mind.

We shall not break.

We join the line.

We answer the call.

We will stand and die.

Yet death will know our name.

We are Oathsworn. Twenty six words that now define you. Together they draw you back to thesurface and you gulp air. Then, suddenly, the tunnel is as it was, thevision gone.

As you look ahead, the tunnel has come to an end, and a vast cavern nowlies before you. Great pillar-like Deepwood trees suspend the expanse ofthe roof. Each pillar is covered in clusters of amber nuggets that pulseto the beat of a great heart. Roots fill the caverns and every one ofthem leads back to one central point. A colossal being tethered to onewall, its great back arched as it writhes in slumber as though in anightmare. It was clearly an A'Dendri once, though it has now swollen togigantic proportions, warped and twisted. Jutting from its chest is ahuge amber boulder which pulses in sync with the veins on the walls. Looking closely, you see something move beneath its glassy orangesurface. As you watch you realize the roots do not just bind thecreature but emerge from it. Every root finding its source in thisbeing.

"Magnificent isn't he?" Samil says from behind you. Turning your weaponsto him, he merely walks through them with a smile. You ask him who thecreature is and Samil smiles. "He was once the father of an entirepeople. A King losing a war against the 'treekillers. He wished todefeat his enemies. So, I told him how. I was but a whisper when hefirst came to me. Nothing more than a worm in the ear. I gave him whathe asked for. Though not quite the way he had intended." A smilebroadens on Samil's face as he turns to you. "Now he is the father of amuch greater kingdom," he says, raising his hands to gesture at theentirety of the Deepwood.

You suddenly remember the tale you read in the Watcher's journal. Thestory of the war with the A'Dendri over the Life Giver. It said theA'Dendri were losing that war when the madness came, wiping out theircity, and in its death throes, the Deepwood followed. If what Samil issaying is true, the massive A'Dendri buried beneath the earth here mustbe the cause of it all. This must be Kharnus, the progenitor of theA'Dendri race and the source of the Deepwood as well.

While Samil speaks, you gauge the combat potential of the sleeping giantbefore you.`,
        type: "story",
      },
      {
        text: `PERFORM A SPOT CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORN GAINA REDRAW TOKEN AND MARK THE ENCOUNTER SPECIAL RULES BOARD BOX FORCHAPTER 21 ON YOUR FREE COMPANY SHEET.`,
        type: "rule",
      },
      {
        text: `You ask Samil why he is telling you all this, and he replies, "Becauseyour choice must be true. My lie has fed me well, Kharnus drank from thelife stream and the world died. An infinite stream of tortured soulsflowed into him, driving him utterly mad and I have grown from thatsuffering within our friend here. Yet it is only the truth that can freeme. A pure choice. Isn't that what all this has been about?" he says,with disdain. "That is why you are here. I have kept you alive on theWire to bring you here, because I know you will make the right choice

"What choice?" you ask. 

"The only one that ever mattered" Samils replies. "Whether or not torelease me." Incredulous, you ask him why you how would, and with asmile returning to his face, he explains you can end the Deepwood. Ifyou kill Kharnus, it will mean the decline of the Deepwood and end ofthe plague, but it will release Samil. Or you can choose to keep Samilbound, allowing the Deepwood to persist and the plague to continue

An opportunity to end the plague and destroy the Deepwood is before you. All you must do is kill Kharnus. But in doing so, you will unleashwhatever Samil is into the world. Something primal in you warns againstthis, yet would you sacrifice Verum to stop him? He is clearly a beingof immense power. If with one lie, he could cause the breaking of theworld, what would he be capable of free of his bondage? Couldsacrificing Verum mean saving the rest of the world? You look intoSamil's eyes, seeking any sign of humanity, some reason to console youif you chose to free him, but he is not hiding himself from you now. Hiseyes are black pits, and in them you see only death staring back at you

The roar of the returning host of beasts stampedes down the tunnel. Rushing to the cavern entrance, you desperately hack at the stone anddirt and roots, collapsing the tunnel and sealing yourself inside. Looking at Samil you realize that you were never escaping this cave. Allyou can do now is make the right choice and make your death meansomething.

The cavern falls silent as the world teeters on a knife-edge.`,
        type: "story",
      },
      {
        text: `CHOOSE ONE LAST TIME. EITHER:

A. Free Samil.

WRITE THE KEYWORD 'RELEASED' ON YOUR FREE COMPANY SHEET.

B. Keep Samil bound.

WRITE THE KEYWORD 'SEALED' ON YOUR FREE COMPANY SHEET. `,
        type: "rule",
      },
      {
        text: `Suddenly, a boulder-sized fist smashes into the ground behind you, and amouthless roar rattles your bones. Kharnus, the father of the A'Dendriand creator of the Deepwood, driven mad, and sealed within this livingtomb for hundreds of years, awakens!`,
        type: "story",
      },
      {
        text: `IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 21.

IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 21. `,
        type: "rule",
      },
      {
        text: `IF YOU HAVE THE 'RELEASED' KEYWORD ON YOUR FREE COMPANY SHEET TURN TOEPI.2 IN THE EPILOGUE OF CHAPTER 21 IN THE STORY BOOK

IF YOU HAVE THE 'SEALED' KEYWORD ON YOUR FREE COMPANY SHEET - TURN TOEPI.3 IN THE EPILOGUE OF CHAPTER 21 IN THE STORY BOOK.`,
        type: "rule",
      },
    ],
  },
];
