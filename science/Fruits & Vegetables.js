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
                      qText: `_________ is the fruit with rough skin`,
                      options: `durian, pear, grapes `
                  },
                  {
                      qText: `_________ is the fruit with smooth skin`,
                      options: `pear, pineapple, durian`
                  },
		  {
                      qText: `Which of the following fruit has no seeds ?`,
                      options: `banana, apple, pear`
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
                      qText: `_________   are called the 'Food factories of a plant'`,
                      options: `leaves, roots, stems`
                  },
                  {
                      qText: `Which plant's stem is sweet and used to make sugar and juice?`,
                      options: `sugarcane, bamboo, corn`
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
                          
