 {
            label: 'Festivals- MCQ',
            type: 'mcq',
            data: {
              title: 'Multiple Choice Questions',
              questions: [
                  {
                      qText: `During _________ festival santa claus comes and gives children gifts.`,
                      options: `Christmas, Easter, Diwali`
                  },
                  {
                      qText: `_________ festival is called the festival of lights.`,
                      options: `Diwali, New year, Holi`
                  },
                  {
                      qText: `______ the harvest festival celebrated in Tamil nadu.`,
                      options: `Pongal, Diwali, Dashera`
                  },
                  {
                      qText: `_________  is a National festival celebrated throughout India in the month of August.`,
                      options: `Independence day, Republic day, Gandhi Jayanti`
                  },
                  {
                      qText: `_________ festival is called the festival of colours.`,
                      options: `Holi, Diwali, New year`
                  },
                  {
                      qText: `On _________ a parade is held at Rajpath in New Delhi.`,
                      options: ` Republic day, Gandhi Jayanti, New year`
                  }
              ] 
            },
            
            {
      label: "Festival and Date",
      type: "matchByDragDrop",
      data: {
        isPractice: true,
        title: "Drag and drop to match Festival and Date.",
        styles: {
          fontSize: "1rem",
          leftSize: 150,
          rightSize: 150,
        },
        list: [
          ["Republic Day →", " 26th January"],
          ["Independence Day  →", "15th August"],
	        ["Gandhi Jayanti  →", "2nd October"],
          ["Christmas →", "25th December"],
          ["New Year →", "1st January"],
          ["Labour Day   →", "1st May"],
        ],
      },
