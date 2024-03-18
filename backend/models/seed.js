const {PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main(){
    await prisma.book.createMany({
        data:[
            {
                
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                publication_year: 1960,
                category: [
                  "Fiction",
                  "Classic"
                ],
                description: "A classic novel depicting racial injustice in the American South.",
                image: "https://fakeimg.pl/667x1000/cc6600",
                price: 100
            },
              {
            
                title: "1984",
                author: "George Orwell",
                publication_year: 1949,
                category: [
                  "Dystopian",
                  "Science Fiction"
                ],
                description: "A dystopian novel portraying a totalitarian society.",
                image: "https://fakeimg.pl/667x1000/cc6600",
                price: 2345
              },
              {
                 
                title: "Pride and Prejudice",
                author: "Jane Austen",
                publication_year: 1813,
                category: [
                  "Classic",
                  "Romance"
                ],
                description: "A classic novel exploring themes of love, marriage, and social norms.",
                image: "https://fakeimg.pl/667x1000/cc6600",
                price:400
              },
              {
                 
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                publication_year: 1925,
                category: [
                  "Fiction",
                  "Classic"
                ],
                description: "A tale of the American Dream, wealth, and love during the Roaring Twenties.",
                image: "https://fakeimg.pl/667x1000/cc6600",
                price:560
              },
              {
                 
                title: "Moby-Dick",
                author: "Herman Melville",
                publication_year: 1851,
                category: [
                  "Fiction",
                  "Adventure"
                ],
                description: "The epic tale of Captain Ahab's obsession with the white whale.",
                image: "https://fakeimg.pl/667x1000/cc6600",
                price:560
              },
              {
                 
                title: "The Lord of the Rings",
                author: "J.R.R. Tolkien",
                publication_year: 1954,
                category: [
                  "Fantasy",
                  "Adventure"
                ],
                description: "An epic fantasy saga about the quest to destroy the One Ring.",
                image: "https://fakeimg.pl/667x1000/cc6600",
                price:560
              },
              // {
                 
              //   "title": "The Catcher in the Rye",
              //   "author": "J.D. Salinger",
              //   "publication_year": 1951,
              //   "category": [
              //     "Fiction",
              //     "Coming-of-age"
              //   ],
              //   "description": "A classic coming-of-age novel following Holden Caulfield's journey.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":560
              // },
              // {
                 
              //   "title": "The Hobbit",
              //   "author": "J.R.R. Tolkien",
              //   "publication_year": 1937,
              //   "category": [
              //     "Fantasy",
              //     "Adventure"
              //   ],
              //   "description": "The prequel to The Lord of the Rings, following Bilbo Baggins' journey.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":560
              // },
              // {
                 
              //   "title": "One Hundred Years of Solitude",
              //   "author": "Gabriel Garcia Marquez",
              //   "publication_year": 1967,
              //   "category": [
              //     "Magical Realism",
              //     "Literary Fiction"
              //   ],
              //   "description": "A multi-generational saga of the Buendía family in the fictional town of Macondo.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":560
              // },
              // {
                 
              //   "title": "War and Peace",
              //   "author": "Leo Tolstoy",
              //   "publication_year": 1869,
              //   "category": [
              //     "Historical Fiction",
              //     "Epic"
              //   ],
              //   "description": "A monumental work depicting the events of Russian society during the Napoleonic era.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":560
              // },
              // {
                 
              //   "title": "The Odyssey",
              //   "author": "Homer",
              //   "publication_year": "8th century BCE",
              //   "category": [
              //     "Epic",
              //     "Mythology"
              //   ],
              //   "description": "An ancient Greek epic poem recounting Odysseus' ten-year journey home after the Trojan War.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":560
              // },
              // {
                 
              //   "title": "The Divine Comedy",
              //   "author": "Dante Alighieri",
              //   "publication_year": "1320",
              //   "category": [
              //     "Epic",
              //     "Poetry"
              //   ],
              //   "description": "An epic poem that follows the journey of the soul through Hell, Purgatory, and Heaven.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":560
              // },
              // {
                 
              //   "title": "The Brothers Karamazov",
              //   "author": "Fyodor Dostoevsky",
              //   "publication_year": 1880,
              //   "category": [
              //     "Classic",
              //     "Philosophical Fiction"
              //   ],
              //   "description": "A complex novel exploring themes of spirituality, morality, and human nature.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":560
              // },
              // {
                
              //   "title": "Crime and Punishment",
              //   "author": "Fyodor Dostoevsky",
              //   "publication_year": 1866,
              //   "category": [
              //     "Classic",
              //     "Psychological Fiction"
              //   ],
              //   "description": "A psychological thriller revolving around guilt, conscience, and redemption.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":1052
              // },
              // {
                 
              //   "title": "The Picture of Dorian Gray",
              //   "author": "Oscar Wilde",
              //   "publication_year": 1890,
              //   "category": [
              //     "Gothic",
              //     "Philosophical Fiction"
              //   ],
              //   "description": "A novel about a man whose portrait ages while he retains his youth and beauty.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":1052
              // },
              // {
                 
              //   "title": "Brave New World",
              //   "author": "Aldous Huxley",
              //   "publication_year": 1932,
              //   "category": [
              //     "Dystopian",
              //     "Science Fiction"
              //   ],
              //   "description": "A dystopian vision of a future society obsessed with pleasure and conformity.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":1052
              // },
              // {
                 
              //   "title": "The Count of Monte Cristo",
              //   "author": "Alexandre Dumas",
              //   "publication_year": 1844,
              //   "category": [
              //     "Adventure",
              //     "Historical Fiction"
              //   ],
              //   "description": "An adventure novel of revenge, love, and redemption set in the early 19th century.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":1052
              // },
              // {
                 
              //   "title": "Anna Karenina",
              //   "author": "Leo Tolstoy",
              //   "publication_year": 1877,
              //   "category": [
              //     "Classic",
              //     "Romance"
              //   ],
              //   "description": "A tragic love story set against the backdrop of Russian high society.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":1052
              // },
              // {
                 
              //   "title": "The Alchemist",
              //   "author": "Paulo Coelho",
              //   "publication_year": 1988,
              //   "category": [
              //     "Fiction",
              //     "Philosophical"
              //   ],
              //   "description": "A philosophical novel about a shepherd boy's journey to find his personal legend.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":1052
              // },
              // {
                 
              //   "title": "The Adventures of Huckleberry Finn",
              //   "author": "Mark Twain",
              //   "publication_year": 1884,
              //   "category": [
              //     "Adventure",
              //     "Satire"
              //   ],
              //   "description": "A satirical novel following Huck Finn's journey down the Mississippi River.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":1052
              // },
              // {
                 
              //   "title": "The Iliad",
              //   "author": "Homer",
              //   "publication_year": "8th century BCE",
              //   "category": [
              //     "Epic",
              //     "Mythology"
              //   ],
              //   "description": "An ancient Greek epic poem about the Trojan War and the hero Achilles.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":1052
              // },
              // {
                 
              //   "title": "The Lord of the Rings",
              //   "author": "J.R.R. Tolkien",
              //   "publication_year": 1954,
              //   "category": [
              //     "Fantasy",
              //     "Adventure"
              //   ],
              //   "description": "A thrilling epic about the quest to destroy the One Ring and save Middle-earth from the dark lord Sauron.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                 
              //   "title": "Don Quixote",
              //   "author": "Miguel de Cervantes",
              //   "publication_year": 1605,
              //   "category": [
              //     "Classic",
              //     "Satire"
              //   ],
              //   "description": "A satirical novel about a deluded knight and his faithful squire, Sancho Panza.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                 
              //   "title": "Frankenstein",
              //   "author": "Mary Shelley",
              //   "publication_year": 1818,
              //   "category": [
              //     "Gothic",
              //     "Science Fiction"
              //   ],
              //   "description": "A novel about the creation of a monster and the consequences of playing god.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                 
              //   "title": "Alice's Adventures in Wonderland",
              //   "author": "Lewis Carroll",
              //   "publication_year": 1865,
              //   "category": [
              //     "Fantasy",
              //     "Children's Literature"
              //   ],
              //   "description": "A whimsical tale about a girl named Alice who falls into a magical world.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                 
              //   "title": "The Little Prince",
              //   "author": "Antoine de Saint-Exupéry",
              //   "publication_year": 1943,
              //   "category": [
              //     "Fable",
              //     "Children's Literature"
              //   ],
              //   "description": "A philosophical novella about a young prince's journey through the universe.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                 
              //   "title": "The Book Thief",
              //   "author": "Markus Zusak",
              //   "publication_year": 2005,
              //   "category": [
              //     "Historical Fiction",
              //     "War"
              //   ],
              //   "description": "A story of a girl living in Nazi Germany, narrated by Death.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                 
              //   "title": "Slaughterhouse-Five",
              //   "author": "Kurt Vonnegut",
              //   "publication_year": 1969,
              //   "category": [
              //     "Satire",
              //     "Science Fiction"
              //   ],
              //   "description": "An anti-war novel that mixes science fiction and dark humor.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                 
              //   "title": "The Grapes of Wrath",
              //   "author": "John Steinbeck",
              //   "publication_year": 1939,
              //   "category": [
              //     "Historical Fiction",
              //     "Social Commentary"
              //   ],
              //   "description": "A novel about the plight of migrant workers during the Great Depression.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                 
              //   "title": "Fahrenheit 451",
              //   "author": "Ray Bradbury",
              //   "publication_year": 1953,
              //   "category": [
              //     "Dystopian",
              //     "Science Fiction"
              //   ],
              //   "description": "A dystopian novel depicting a future society where books are banned.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                 
              //   "title": "The Lord of the Flies",
              //   "author": "William Golding",
              //   "publication_year": 1954,
              //   "category": [
              //     "Dystopian",
              //     "Psychological Fiction"
              //   ],
              //   "description": "A novel about a group of British boys stranded on an uninhabited island.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                 
              //   "title": "The Hitchhiker's Guide to the Galaxy",
              //   "author": "Douglas Adams",
              //   "publication_year": 1979,
              //   "category": [
              //     "Science Fiction",
              //     "Comedy"
              //   ],
              //   "description": "A comedic science fiction series about the misadventures of Arthur Dent.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                 
              //   "title": "A Tale of Two Cities",
              //   "author": "Charles Dickens",
              //   "publication_year": 1859,
              //   "category": [
              //     "Historical Fiction",
              //     "Classic"
              //   ],
              //   "description": "A historical novel set during the French Revolution, exploring themes of sacrifice and resurrection.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                
              //   "title": "The Chronicles of Narnia",
              //   "author": "C.S. Lewis",
              //   "publication_year": 1950,
              //   "category": [
              //     "Fantasy",
              //     "Children's Literature"
              //   ],
              //   "description": "A series of fantasy novels set in the magical land of Narnia.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                 
              //   "title": "The Handmaid's Tale",
              //   "author": "Margaret Atwood",
              //   "publication_year": 1985,
              //   "category": [
              //     "Dystopian",
              //     "Feminist Fiction"
              //   ],
              //   "description": "A dystopian novel set in a totalitarian society where women are subjugated.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                 
              //   "title": "The Name of the Rose",
              //   "author": "Umberto Eco",
              //   "publication_year": 1980,
              //   "category": [
              //     "Historical Fiction",
              //     "Mystery"
              //   ],
              //   "description": "A medieval mystery novel set in an Italian monastery.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                 
              //   "title": "The Trial",
              //   "author": "Franz Kafka",
              //   "publication_year": 1925,
              //   "category": [
              //     "Absurdist Fiction",
              //     "Existential"
              //   ],
              //   "description": "A surreal novel exploring themes of guilt, law, and justice.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                 
              //   "title": "The Kite Runner",
              //   "author": "Khaled Hosseini",
              //   "publication_year": 2003,
              //   "category": [
              //     "Historical Fiction",
              //     "Drama"
              //   ],
              //   "description": "A novel about friendship, redemption, and the impact of war in Afghanistan.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                 
              //   "title": "The Pillars of the Earth",
              //   "author": "Ken Follett",
              //   "publication_year": 1989,
              //   "category": [
              //     "Historical Fiction",
              //     "Adventure"
              //   ],
              //   "description": "An epic historical novel set in 12th-century England, centered around the construction of a cathedral.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                 
              //   "title": "The Shadow of the Wind",
              //   "author": "Carlos Ruiz Zafón",
              //   "publication_year": 2001,
              //   "category": [
              //     "Mystery",
              //     "Gothic"
              //   ],
              //   "description": "A mystery novel set in post-war Barcelona, revolving around a forgotten book and its author.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                 
              //   "title": "The Secret Garden",
              //   "author": "Frances Hodgson Burnett",
              //   "publication_year": 1911,
              //   "category": [
              //     "Children's Literature",
              //     "Classic"
              //   ],
              //   "description": "A classic children's novel about a young girl who discovers a hidden garden.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                 
              //   "title": "The Giver",
              //   "author": "Lois Lowry",
              //   "publication_year": 1993,
              //   "category": [
              //     "Dystopian",
              //     "Young Adult"
              //   ],
              //   "description": "A dystopian novel about a society with strict control over emotions and memories.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                 
              //   "title": "The Metamorphosis",
              //   "author": "Franz Kafka",
              //   "publication_year": 1915,
              //   "category": [
              //     "Absurdist Fiction",
              //     "Existential"
              //   ],
              //   "description": "A novella about a man who wakes up one morning transformed into a giant insect.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                 
              //   "title": "Gone with the Wind",
              //   "author": "Margaret Mitchell",
              //   "publication_year": 1936,
              //   "category": [
              //     "Historical Fiction",
              //     "Romance"
              //   ],
              //   "description": "A historical novel set during the American Civil War, centered around Scarlett O'Hara.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                 
              //   "title": "The Wind in the Willows",
              //   "author": "Kenneth Grahame",
              //   "publication_year": 1908,
              //   "category": [
              //     "Children's Literature",
              //     "Fantasy"
              //   ],
              //   "description": "A children's novel about the adventures of anthropomorphic animals.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                 
              //   "title": "Dracula",
              //   "author": "Bram Stoker",
              //   "publication_year": 1897,
              //   "category": [
              //     "Gothic",
              //     "Horror"
              //   ],
              //   "description": "A Gothic horror novel about the vampire Count Dracula's attempt to move to England.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                 
              //   "title": "The Call of the Wild",
              //   "author": "Jack London",
              //   "publication_year": 1903,
              //   "category": [
              //     "Adventure",
              //     "Nature"
              //   ],
              //   "description": "An adventure novel about a domestic dog's life in the wilds of the Yukon.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                 
              //   "title": "The Stand",
              //   "author": "Stephen King",
              //   "publication_year": 1978,
              //   "category": [
              //     "Horror",
              //     "Post-Apocalyptic"
              //   ],
              //   "description": "A post-apocalyptic horror novel about a deadly pandemic and its aftermath.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                 
              //   "title": "The Color Purple",
              //   "author": "Alice Walker",
              //   "publication_year": 1982,
              //   "category": [
              //     "Fiction",
              //     "Historical"
              //   ],
              //   "description": "A novel about the life of African-American women in the Southern United States.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // },
              // {
                 
              //   "title": "The Silmarillion",
              //   "author": "J.R.R. Tolkien",
              //   "publication_year": 1977,
              //   "category": [
              //     "Fantasy",
              //     "Mythopoeia"
              //   ],
              //   "description": "A collection of mythopoeic stories about the history of Middle-earth.",
              //   "image": "https://fakeimg.pl/667x1000/cc6600",
              //   "price":689
              // }
        ]
    })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })