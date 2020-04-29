{
        label: "South India",
        list: [
          {
            label: 'States in South India',
            type: 'dragAndDrop',
            data: {
                img: "https://s3.ap-south-1.amazonaws.com/pschool.in/assets/social/southIndiaStates.png",
                width: 342,
                height: 368,
                wordWidth: 100,
                words: [
                  { word: "Karnataka", x: 50, y: 180 },
                  { word: "Andhra Pradesh", x: 115, y: 130 },
                  { word: "Telangana", x: 140, y: 60 },
                  { word: "Tamil Nadu", x: 110, y: 240 },
                  { word: "Kerala", x: 40, y: 280 },
                  { word: "Goa", x: 6, y: 120 },
                  { word: "Maharashtra", x: 30, y: 10 }
                ]
            }
          },
          {
            label: 'States and Capitals',
            type: 'matchByDragDrop',
            data: {
              isPractice: true,
              title: 'Drag and drop to match states and capitals.',
              styles: {
                fontSize: '1rem',
                leftSize: 150,
                rightSize: 150
              },
              list: [
                ['Andhra Pradhesh →', 'Hyderabad'],
                ['Karnataka →', 'Bangalore'],
                ['Kerala →', 'Thiruvananthapuram'],
                ['Tamil Nadu →', 'Chennai'],
                ['Goa →', 'Panaji'],
                ['Maharashtra →', 'Bombay'],
              ]
            }
          },
          {
            label: 'Rivers',
            type: 'dragAndDrop',
            data: {
              img: "https://s3.ap-south-1.amazonaws.com/pschool.in/assets/social/southIndianRivers.png",
              width: 253,
              height: 286,
              wordWidth: 85,
              words: [
                { word: "Cauvery", x: 70, y: 180 },
                { word: "Krishna", x: 125, y: 76 },
                { word: "Godavari", x: 60, y: 10 },
                { word: "Vaigai", x: 110, y: 240 },
                { word: "Tungabhadra", x: 40, y: 140 },
                { word: "Periyar", x: 26, y: 220 },
                { word: "Penner", x: 130, y: 126 }
              ]
            }
          },
          {
            label: 'Languages',
            type: 'matchByDragDrop',
            data: {
              isPractice: true,
              title: 'Drag and drop to match states and language spoken.',
              styles: {
                fontSize: '1rem',
                leftSize: 150,
                rightSize: 150
              },
              list: [
                ['Andhra Pradhesh →', 'Telugu'],
                ['Karnataka →', 'Kannada'],
                ['Kerala →', 'Malayalam'],
                ['Tamil Nadu →', 'Tamil'],
                ['Goa →', 'Konkani'],
                ['Maharashtra →', 'Marathi'],
              ]
            }
          },
          {
            label: 'Quiz',
            type: 'mcq',
            data: {
              title: 'Multiple Choice Question',
              questions: [
                  {
                      qText: `Which is the recently formed state?`,
                      options: `Telangana, Goa, Andhra Pradesh, Kerala`
                  },
                  {
                      qText: `Which place is famous for Dasara?`,
                      options: `Mysore, Banglore, Madurai, Kochi`
                  },
                  {
                      qText: `Which city is the capital of more than one state?`,
                      options: `Hydrabad, Banglore, Chennai, Thiruvananthapuram`
                  },
                  {
                      qText: `Which state is called "God's own country"?`,
                      options: `Kerala, Telangana, Goa, Andhra Pradesh`
                  },
                  {
                      qText: `Which town is present at the meeting point of Arabian Sea, Bay of Bengal and Indian Ocean?`,
                      options: `Kanyakumari, Madurai, Trichy, Kochi`
                  },
                  {
                      qText: `Which town is an Island?`,
                      options: `Rameswaram, Kanyakumari, Madurai, Kochi`
                  },
                  {
                      qText: `Which of the places in not a hill station?`,
                      options: `Cochin, Ooty, Kodaikanal, Coorg`
                  },
                  {
                      qText: `Which city has cool climate?`,
                      options: `Bangalore, Chennai, Hydrabad, Vishakapatnam`
                  },
              ] 
            }
          },
        ]
      },
