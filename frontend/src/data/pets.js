const pets = [
    {
        id: 1,
        name: "Luna",
        type: "Dog",
        breed: "Golden Retriever",
        age: 2,
        gender: "Female",
        size: "Large",
        color: "Golden",
        description: "Luna is a friendly and energetic Golden Retriever who loves to play fetch and go for long walks. She's great with children and other dogs.",
        imageUrl: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        status: "Available",
        location: "Main Shelter",
        vaccinated: true,
        neutered: true,
        temperament: ["Friendly", "Active", "Social"]
    },
    {
        id: 2,
        name: "Oliver",
        type: "Cat",
        breed: "British Shorthair",
        age: 3,
        gender: "Male",
        size: "Medium",
        color: "Grey",
        description: "Oliver is a calm and dignified British Shorthair who enjoys lounging in sunny spots and gentle petting sessions.",
        imageUrl: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        status: "Available",
        location: "Foster Home",
        vaccinated: true,
        neutered: true,
        temperament: ["Calm", "Independent", "Gentle"]
    },
    {
        id: 3,
        name: "Max",
        type: "Dog",
        breed: "German Shepherd",
        age: 1,
        gender: "Male",
        size: "Large",
        color: "Black and Tan",
        description: "Max is a smart and trainable German Shepherd puppy. He's already showing great potential for obedience training.",
        imageUrl: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        status: "Available",
        location: "Main Shelter",
        vaccinated: true,
        neutered: false,
        temperament: ["Intelligent", "Protective", "Trainable"]
    },
    {
        id: 4,
        name: "Bella",
        type: "Cat",
        breed: "Siamese",
        age: 5,
        gender: "Female",
        size: "Small",
        color: "Cream with dark points",
        description: "Bella is a chatty Siamese cat who loves attention and will tell you all about her day.",
        imageUrl: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        status: "Available",
        location: "Foster Home",
        vaccinated: true,
        neutered: true,
        temperament: ["Vocal", "Affectionate", "Social"]
    },
    {
        id: 5,
        name: "Rocky",
        type: "Dog",
        breed: "French Bulldog",
        age: 4,
        gender: "Male",
        size: "Small",
        color: "Fawn",
        description: "Rocky is a charming French Bulldog who loves to cuddle and play. He's great in apartments.",
        imageUrl: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        status: "Available",
        location: "Main Shelter",
        vaccinated: true,
        neutered: true,
        temperament: ["Playful", "Affectionate", "Calm"]
    },
    {
        id: 6,
        name: "Milo",
        type: "Cat",
        breed: "Maine Coon",
        age: 2,
        gender: "Male",
        size: "Large",
        color: "Brown Tabby",
        description: "Milo is a gentle giant who loves to be brushed and will follow you around like a dog.",
        imageUrl: "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        status: "Available",
        location: "Main Shelter",
        vaccinated: true,
        neutered: true,
        temperament: ["Gentle", "Friendly", "Patient"]
    },
    {
        id: 7,
        name: "Lucy",
        type: "Dog",
        breed: "Beagle",
        age: 3,
        gender: "Female",
        size: "Medium",
        color: "Tricolor",
        description: "Lucy is an energetic Beagle who loves to follow her nose on adventures. She needs an active family.",
        imageUrl: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        status: "Available",
        location: "Foster Home",
        vaccinated: true,
        neutered: true,
        temperament: ["Curious", "Energetic", "Friendly"]
    },
    {
        id: 8,
        name: "Sophie",
        type: "Cat",
        breed: "Persian",
        age: 6,
        gender: "Female",
        size: "Medium",
        color: "White",
        description: "Sophie is a luxurious Persian cat who enjoys being pampered and living like royalty.",
        imageUrl: "https://images.unsplash.com/photo-1591429939960-b7d5f615f934?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        status: "Available",
        location: "Main Shelter",
        vaccinated: true,
        neutered: true,
        temperament: ["Calm", "Dignified", "Sweet"]
    },
    {
        id: 9,
        name: "Charlie",
        type: "Dog",
        breed: "Labrador Retriever",
        age: 1,
        gender: "Male",
        size: "Large",
        color: "Chocolate",
        description: "Charlie is a playful Lab puppy who loves water and would make a great family dog.",
        imageUrl: "https://images.unsplash.com/photo-1579213838058-c27e5d958012?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        status: "Available",
        location: "Main Shelter",
        vaccinated: true,
        neutered: false,
        temperament: ["Playful", "Friendly", "Energetic"]
    },
    {
        id: 10,
        name: "Leo",
        type: "Cat",
        breed: "Bengal",
        age: 2,
        gender: "Male",
        size: "Medium",
        color: "Spotted Brown",
        description: "Leo is an active Bengal who needs lots of playtime and vertical spaces to climb.",
        imageUrl: "https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        status: "Available",
        location: "Foster Home",
        vaccinated: true,
        neutered: true,
        temperament: ["Active", "Intelligent", "Adventurous"]
    },
    {
        id: 11,
        name: "Daisy",
        type: "Dog",
        breed: "Poodle",
        age: 4,
        gender: "Female",
        size: "Medium",
        color: "White",
        description: "Daisy is a sophisticated Poodle who's great with children and doesn't shed.",
        imageUrl: "https://images.unsplash.com/photo-1591768575198-88dac53fbd0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        status: "Available",
        location: "Main Shelter",
        vaccinated: true,
        neutered: true,
        temperament: ["Intelligent", "Elegant", "Friendly"]
    },
    {
        id: 12,
        name: "Simba",
        type: "Cat",
        breed: "Orange Tabby",
        age: 1,
        gender: "Male",
        size: "Medium",
        color: "Orange",
        description: "Simba is a curious and playful young cat who loves to explore and play with toys.",
        imageUrl: "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        status: "Available",
        location: "Main Shelter",
        vaccinated: true,
        neutered: true,
        temperament: ["Playful", "Curious", "Energetic"]
    },
    {
        id: 13,
        name: "Bailey",
        type: "Dog",
        breed: "Yorkshire Terrier",
        age: 7,
        gender: "Female",
        size: "Small",
        color: "Brown and Black",
        description: "Bailey is a sweet senior Yorkie who loves to sit in laps and give kisses.",
        imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        status: "Available",
        location: "Foster Home",
        vaccinated: true,
        neutered: true,
        temperament: ["Affectionate", "Gentle", "Loyal"]
    },
    {
        id: 14,
        name: "Shadow",
        type: "Cat",
        breed: "Black Domestic Shorthair",
        age: 3,
        gender: "Male",
        size: "Medium",
        color: "Black",
        description: "Shadow is a mysterious and gentle cat who enjoys quiet environments and gentle pets.",
        imageUrl: "https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        status: "Available",
        location: "Main Shelter",
        vaccinated: true,
        neutered: true,
        temperament: ["Quiet", "Gentle", "Independent"]
    },
    {
        id: 15,
        name: "Cooper",
        type: "Dog",
        breed: "Australian Shepherd",
        age: 2,
        gender: "Male",
        size: "Large",
        color: "Blue Merle",
        description: "Cooper is a highly intelligent Aussie who needs an active lifestyle and mental stimulation.",
        imageUrl: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        status: "Available",
        location: "Main Shelter",
        vaccinated: true,
        neutered: true,
        temperament: ["Intelligent", "Active", "Loyal"]
    },
    {
        id: 16,
        name: "Lily",
        type: "Cat",
        breed: "Ragdoll",
        age: 4,
        gender: "Female",
        size: "Large",
        color: "Seal Point",
        description: "Lily is a classic Ragdoll who goes limp when held and loves everyone she meets.",
        imageUrl: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        status: "Available",
        location: "Foster Home",
        vaccinated: true,
        neutered: true,
        temperament: ["Gentle", "Affectionate", "Relaxed"]
    },
    {
        id: 17,
        name: "Zeus",
        type: "Dog",
        breed: "Great Dane",
        age: 3,
        gender: "Male",
        size: "Extra Large",
        color: "Brindle",
        description: "Zeus is a gentle giant who thinks he's a lap dog. Great with kids but needs space!",
        imageUrl: "https://images.unsplash.com/photo-1553882809-a4f57e59501d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        status: "Available",
        location: "Main Shelter",
        vaccinated: true,
        neutered: true,
        temperament: ["Gentle", "Friendly", "Calm"]
    },
    {
        id: 18,
        name: "Coco",
        type: "Cat",
        breed: "Scottish Fold",
        age: 2,
        gender: "Female",
        size: "Small",
        color: "Grey and White",
        description: "Coco is an adorable Scottish Fold who loves to pose for pictures and get attention.",
        imageUrl: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        status: "Available",
        location: "Main Shelter",
        vaccinated: true,
        neutered: true,
        temperament: ["Sweet", "Photogenic", "Social"]
    },
    {
        id: 19,
        name: "Bear",
        type: "Dog",
        breed: "Newfoundland",
        age: 5,
        gender: "Male",
        size: "Extra Large",
        color: "Black",
        description: "Bear is a water-loving gentle giant who excels at rescue swimming and giving big hugs.",
        imageUrl: "https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        status: "Available",
        location: "Foster Home",
        vaccinated: true,
        neutered: true,
        temperament: ["Gentle", "Protective", "Water-loving"]
    },
    {
        id: 20,
        name: "Misty",
        type: "Cat",
        breed: "Russian Blue",
        age: 1,
        gender: "Female",
        size: "Medium",
        color: "Grey",
        description: "Misty is a shy but sweet Russian Blue who warms up quickly in a quiet environment.",
        imageUrl: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        status: "Available",
        location: "Main Shelter",
        vaccinated: true,
        neutered: true,
        temperament: ["Shy", "Sweet", "Quiet"]
    }
];

export default pets; 