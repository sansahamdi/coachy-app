export const dataClient = [
  {
    id: 1,
    type: "Client",
    firstName: "Malek",
    lastName: "Hizaoui",
    phoneNumber: "21345350",
    Password: "hello",
    email: "hizaoui.malek.habib@gmail.com",
    image_user: require("../../assets/images/MalekPhoto.jpg"),
    location: {
      city: "Genève",
      latitude: "47.183706",
      longitude: "8.547383",
    },
    age: 23,
    reservation: [
      [],
      [],
      [
      ],
      [],
      [],
      [],
      [],
    ],
    sessionHistory:[
      {
        day:"Thursday , 17 septembre",
        from: 17,
        to: 18,
        reservation: "accepted",
        coach: {
          firstName: "Fedi",
          lastName: "dghim",
          location: {
            city: "Genéve",
            latitude: "47.183706",
            longitude: "8.547383",
          },
          image_user: require("../../assets/images/MalekPhoto.jpg"),
        },
      },
      {
        day:"Thursday , 17 septembre",
        from: 17,
        to: 18,
        reservation: "¨Pending",
        coach: {
          firstName: "Fedi",
          lastName: "dghim",
          location: {
            city: "Genéve",
            latitude: "47.183706",
            longitude: "8.547383",
          },
          image_user: require("../../assets/images/MalekPhoto.jpg"),
        },
      },
      {
        day:"Thursday , 17 septembre",

        from: 17,
        to: 18,
        reservation: "declined",
        coach: {
          firstName: "Fedi",
          lastName: "dghim",
          location: {
            city: "Genéve",
            latitude: "47.183706",
            longitude: "8.547383",
          },
          image_user: require("../../assets/images/MalekPhoto.jpg"),
        },
      },
      {
        day:"Monday , 11 October",
        from: 17,
        to: 18,
        reservation: "decline",
        coach: {
          firstName: "Fedi",
          lastName: "dghim",
          location: {
            city: "Genéve",
            latitude: "47.183706",
            longitude: "8.547383",
          },
          image_user: require("../../assets/images/MalekPhoto.jpg"),
        },
      },
      {
        day:"Friday , 2 Novembre",
        from: 17,
        to: 18,
        reservation: "accepted",
        coach: {
          firstName: "Fedi",
          lastName: "dghim",
          location: {
            city: "Genéve",
            latitude: "47.183706",
            longitude: "8.547383",
          },
          image_user: require("../../assets/images/MalekPhoto.jpg"),
        },
      },
      {
        day:"Monday , 11 october",
        from: 17,
        to: 18,
        reservation: "accepted",
        coach: {
          firstName: "Fedi",
          lastName: "dghim",
          location: {
            city: "Genéve",
            latitude: "47.183706",
            longitude: "8.547383",
          },
          image_user: require("../../assets/images/MalekPhoto.jpg"),
        },
      },
      {
        day:"Monday , 11 october",
        from: 17,
        to: 18,
        reservation: "pending",
        coach: {
          firstName: "Fedi",
          lastName: "dghim",
          location: {
            city: "Genéve",
            latitude: "47.183706",
            longitude: "8.547383",
          },
          image_user: require("../../assets/images/MalekPhoto.jpg"),
        },
      },
      {
        day:"Monday , 11 october",
        from: 17,
        to: 18,
        reservation: "pending",
        coach: {
          firstName: "Fedi",
          lastName: "dghim",
          location: {
            city: "Genéve",
            latitude: "47.183706",
            longitude: "8.547383",
          },
          image_user: require("../../assets/images/MalekPhoto.jpg"),
        },
      },
    ],
    messages:[
      {
        user:{
          firstName:"John",
          lastName:"Smith",
          image_user: require("../../assets/images/john.png"),
        },
        allMessages:[
          {
            type:"Client",
            firstName:"Malek",
            message:"Bonjour Comment ca va ?",
            phoneNumber:""
          },
          {
            type:"Coach",
            firstName:"David",
            message:"Oui ca va et toi ?",
            phoneNumber:""

          },
        ]
      },
      {
        user:{
          firstName:"Diana",
          lastName:"Wilson",
          image_user: require("../../assets/images/diana.jpg"),
        },
        allMessages:[
          {
            type:"Client",
            firstName:"Malek",
            message:"Bonjour Comment ca va ?",
            phoneNumber:""

          },
          {
            type:"Coach",
            firstName:"David",
            message:"Oui ca va et toi ?",
            phoneNumber:""

          },
        ]
      },
      {
        user:{
          firstName:"Emily",
          lastName:"Davis",
          image_user: require("../../assets/images/emily.jpg"),
        },
        allMessages:[
          {
            type:"Client",
            firstName:"Malek",
            message:"Bonjour Comment ca va ?",
            phoneNumber:""

          },
          {
            type:"Coach",
            firstName:"Emily",
            message:"Oui ca va et toi ?",
            phoneNumber:""

          },
        ]
      }
    ]

  },
];
