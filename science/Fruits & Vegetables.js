{
            label: 'Fruits and vegetables - Classify',
            type: 'group',
            data: {
              title: "Drag and drop: Classify Fruits and Vegetables.",
              types: [
                {
                  name: "Fruits",
                  text: `grapes, mango, durian, apple, avocado, fig, apricot, kiwi, cherry, lychee `,
                },
                {
                  name: "Vegetables",
                  text: `cabbage, cucumber, mushroom, broccoli, cauliflower, pumpkin, eggplant, garlic, turnip`,
                },

{
            label: 'Fruits & Vegetables - MCQ',
            type: 'mcq',
            data: {
              title: 'Multiple Choice Questions',
              questions: [
                  {
                      qText: `Fruits with rough skin`,
                      options: `durian, pear, grapes `
                  },
                  {
                      qText: `Fruits with smooth skin`,
                      options: `pear, pineapple, durian`
                  },
              ] 
              ] 
            }
          }
 {
            label: 'Fruits & Vegetables- Grade 2/3- MCQ',
            type: 'mcq',
            data: {
              title: 'Multiple Choice Questions',
              questions: [
                  {
                      qText: `Which plant is used as medicine?`,
                      options: `tulsi, lavender, bamboo `
                  },
                  {
                      qText: `_________  are called producers`,
                      options: `plants, animals, birds`
                  },
                  {
                      qText: `_________   is called 'Food factories of a plant'`,
                      options: `leaves, root, stem`
                  },
                  {
                      qText: `My stem is used to make sugar and juice. I taste sweet.`,
                      options: `sugarcane, bamboo, corn`
                  },
                  {
                      qText: `I have stored food in fruit. People use my leaf to serve food. My Bud is used as vegetable.`,
                      options: `banana, mango, apple`
                  },
                   {
                      qText: `The plants that grow in deserts are _________`,
                      options: `cactus, coconut, mango`
                  },
                    {
                      qText: `Plants that grow in water are called ____ plants.`,
                      options: `aquatic, terrestrial, aerial`
                  },
              ] 
            }
          }
{
      label: "Plants and products",
      type: "matchByDragDrop",
      data: {
        isPractice: true,
        title: "Drag and drop to match Plants and their products.",
        styles: {
          fontSize: "1rem",
          leftSize: 150,
          rightSize: 150,
        },
        list: [
          	  ["bamboo →", "paper"],
	  ["teak →", "furniture"],
	  ["eucalyptus →", "medicine"],
	  ["cotton →", "clothes"],
	  ["jasmine →", "perfume"],
	  ["coconut→", "oil"],
              ["rubber→", "tyre"],
	  ],
      },
                          
