import { Feed, NewNote,Collection, Settings } from "../assets/SidebarIcons";
import { AppState } from "../constants";
import { Folder, Note,NavLink} from "../types";

export const navbar_sidebar:NavLink[] = [
  {
    id:1,
    name:"Feed",
    state:AppState.FEED,
    icon:Feed,
    url:'/'
  },
  {
    id:2,
    name:"New Note",
    state:AppState.NEW_NOTE,
    icon:NewNote,
    url:'/new-note'
  },
  {
    id:3,
    name:"Collections",
    state:AppState.COLLECTIONS,
    icon:Collection,
    url:'/collections'
  },
  {
    id:4,
    name:"Settings",
    state:AppState.SETTINGS,
    icon:Settings,
    url:'/settings'
  }
]

export const my_folders:Folder[] = [
        {
          id: 1,
          name: "Mikasa",
          notes:[
            {
              id: 7737,
              title: "Enforcer, The (Gei ba ba de xin)",
              description: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
              date: "13-04-2023",
              likes: 80,
              author: "Shelagh Gladbach"
            },
            {
              id: 8015,
              title: "This Film Is Not Yet Rated",
              description: "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
              date: "04-03-2023",
              likes: 1,
              author: "Ford McCarron"
            },
            {
              id: 9781,
              title: "Grace of Monaco",
              description: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
              date: "15-04-2023",
              likes: 55,
              author: "Shannon Duncan"
            },
            {
              id: 6242,
              title: "Chattahoochee",
              description: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
              date: "13-10-2022",
              likes: 55,
              author: "Kassi Dourin"
            },
            {
              id: 3016,
              title: "Ride with the Devil",
              description: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
              date: "07-11-2022",
              likes: 71,
              author: "Veronike Dreghorn"
            },
            {
              id: 9582,
              title: "Stoked: The Rise and Fall of Gator",
              description: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
              date: "20-01-2023",
              likes: 79,
              author: "Ines Harroll"
            },
            {
              id: 5880,
              title: "Evening",
              description: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
              date: "09-12-2022",
              likes: 55,
              author: "Alejandra Parkeson"
            },
            {
              id: 2606,
              title: "Formula 51",
              description: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
              date: "27-11-2022",
              likes: 51,
              author: "Johnette Sulter"
            },
            {
              id: 9328,
              title: "Hard-Boiled (Lat sau san taam)",
              description: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
              date: "18-06-2023",
              likes: 89,
              author: "Jourdan Phippard"
            },
            {
              id: 6852,
              title: "Charlie Chan in The Chinese Cat",
              description: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
              date: "16-08-2022",
              likes: 96,
              author: "Adelheid Jewers"
            }
          ]
        },
        {
          id: 2,
          name: "Eren",
          notes:[
            {
              id: 8002,
              title: "Terry Pratchett: Choosing to Die",
              description: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
              date: "21-09-2022",
              likes: 28,
              author: "Lefty Corness"
            },
            {
              id: 1058,
              title: "Accidental Tourist, The",
              description: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
              date: "19-03-2023",
              likes: 99,
              author: "Selle Plester"
            },
            {
              id: 342,
              title: "Thieves, The (Dodookdeul)",
              description: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
              date: "01-04-2023",
              likes: 29,
              author: "Amberly Baudesson"
            },
            {
              id: 950,
              title: "Dark Ride",
              description: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
              date: "04-05-2023",
              likes: 99,
              author: "Bobby Stodart"
            },
            {
              id: 3559,
              title: "Countdown to Looking Glass",
              description: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
              date: "13-06-2023",
              likes: 98,
              author: "Araldo Belliveau"
            },
            {
              id: 6315,
              title: "Virginia City",
              description: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
              date: "16-05-2023",
              likes: 95,
              author: "Willis Borles"
            },
            {
              id: 8715,
              title: "Prodigal Sons",
              description: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
              date: "29-11-2022",
              likes: 23,
              author: "Marylinda Rusted"
            },
            {
              id: 5144,
              title: "Kiss the Girls",
              description: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
              date: "04-11-2022",
              likes: 54,
              author: "Tad Gever"
            },
            {
              id: 7215,
              title: "Names of Love, The (Le nom des gens)",
              description: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
              date: "29-04-2023",
              likes: 21,
              author: "Sheppard Ayllett"
            },
            {
              id: 5597,
              title: "Blue Max, The",
              description: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
              date: "30-06-2023",
              likes: 51,
              author: "Marsha Ibarra"
            }
          ]
        },
        {
          id: 3,
          name: "Your Name",
          notes:[
            {
              id: 5571,
              title: "Born to Kill",
              description: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
              date: "19-07-2022",
              likes: 41,
              author: "Jessie Peracco"
            },
            {
              id: 5906,
              title: "Little Darlings",
              description: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
              date: "31-05-2023",
              likes: 81,
              author: "Lindi Mabbitt"
            },
            {
              id: 9051,
              title: "Story of a Prostitute (Shunpu den)",
              description: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
              date: "21-12-2022",
              likes: 21,
              author: "Aldous Arnould"
            },
            {
              id: 5473,
              title: "Crime Zone",
              description: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
              date: "08-10-2022",
              likes: 15,
              author: "Janet Herries"
            },
            {
              id: 7747,
              title: "Quartet",
              description: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
              date: "10-10-2022",
              likes: 12,
              author: "Elaine Chipping"
            },
            {
              id: 6814,
              title: "King Lear (Korol Lir)",
              description: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
              date: "15-03-2023",
              likes: 32,
              author: "Jonis Currer"
            },
            {
              id: 1640,
              title: "Ghost in the Shell 2: Innocence (a.k.a. Innocence) (Inosensu)",
              description: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
              date: "18-07-2022",
              likes: 62,
              author: "Herschel Keep"
            },
            {
              id: 7785,
              title: "Tuck Everlasting",
              description: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
              date: "02-05-2023",
              likes: 86,
              author: "Janette Postin"
            },
            {
              id: 8083,
              title: "Mommie Dearest",
              description: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
              date: "26-05-2023",
              likes: 13,
              author: "Morgen Northall"
            },
            {
              id: 6868,
              title: "Russia's Toughest Prisons (National Geographic)",
              description: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
              date: "24-08-2022",
              likes: 1,
              author: "Sutherland Eglington"
            }
          ]
        },
        {
          id: 4,
          name: "Joker",
          notes:[
            {
              id: 6981,
              title: "Beast, The (La bête)",
              description: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
              date: "05-03-2023",
              likes: 44,
              author: "Ivar Freeborn"
            },
            {
              id: 2066,
              title: "Rebellion (L'ordre et la morale)",
              description: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
              date: "09-05-2023",
              likes: 70,
              author: "Levon Staddom"
            },
            {
              id: 4670,
              title: "Christmas in July",
              description: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
              date: "07-06-2023",
              likes: 53,
              author: "Mirabella Culkin"
            },
            {
              id: 7670,
              title: "Newton Boys, The",
              description: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
              date: "30-12-2022",
              likes: 84,
              author: "Wendeline Jirak"
            },
            {
              id: 3496,
              title: "Catacombs",
              description: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
              date: "23-03-2023",
              likes: 7,
              author: "Bernie Croutear"
            },
            {
              id: 1989,
              title: "Nothing Sacred",
              description: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
              date: "03-06-2023",
              likes: 93,
              author: "Ewell Gerb"
            },
            {
              id: 521,
              title: "Life Partners",
              description: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
              date: "21-09-2022",
              likes: 61,
              author: "Rheta Eddoes"
            },
            {
              id: 2346,
              title: "Jubilation Street",
              description: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
              date: "06-10-2022",
              likes: 56,
              author: "Shina Frontczak"
            },
            {
              id: 8614,
              title: "Color Purple, The",
              description: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
              date: "23-02-2023",
              likes: 8,
              author: "Samuel McConnel"
            },
            {
              id: 1726,
              title: "Portrait in Black",
              description: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
              date: "16-11-2022",
              likes: 7,
              author: "Erika McKechnie"
            }
          ]
        },
]

export const my_notes:Note[] =[
  {
    id: 2418,
    title: "Hooper",
    description: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    date: "27-12-2022",
    likes: 89,
    author: "Kordula Americi"
  },
  {
    id: 1047,
    title: "Best Man, The (Testimone dello sposo, Il)",
    description: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    date: "30-09-2022",
    likes: 77,
    author: "Artur Hug"
  },
  {
    id: 5404,
    title: "Filming 'Othello'",
    description: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    date: "19-08-2022",
    likes: 56,
    author: "Kellsie Thackeray"
  },
  {
    id: 4916,
    title: "Dogs",
    description: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    date: "10-02-2023",
    likes: 8,
    author: "Cloe Swatton"
  },
  {
    id: 8580,
    title: "Widow of St. Pierre, The (Veuve de Saint-Pierre, La)",
    description: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    date: "06-03-2023",
    likes: 13,
    author: "Edan Corcoran"
  },
  {
    id: 5397,
    title: "Faithless (Trolösa)",
    description: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    date: "01-07-2023",
    likes: 1,
    author: "Lottie Rodolico"
  },
  {
    id: 3139,
    title: "Mirage Men",
    description: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    date: "16-07-2022",
    likes: 29,
    author: "Ruthi Mattielli"
  },
  {
    id: 1576,
    title: "Beachhead",
    description: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    date: "29-12-2022",
    likes: 79,
    author: "Lanni Anselmi"
  },
  {
    id: 7866,
    title: "Thompsons, The",
    description: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    date: "23-06-2023",
    likes: 13,
    author: "Evangelina Matthaus"
  },
  {
    id: 2403,
    title: "What Have You Done to Solange?",
    description: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    date: "17-06-2023",
    likes: 100,
    author: "Jayne Stagg"
  },
  {
    id: 8233,
    title: "Dakota",
    description: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    date: "17-06-2023",
    likes: 88,
    author: "Madalyn Dinan"
  },
  {
    id: 470,
    title: "Clonehunter",
    description: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    date: "24-10-2022",
    likes: 52,
    author: "Willard McKew"
  },
  {
    id: 6948,
    title: "Marked Woman",
    description: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    date: "03-11-2022",
    likes: 29,
    author: "Romain Clarage"
  },
  {
    id: 5381,
    title: "Bedrooms & Hallways",
    description: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    date: "16-10-2022",
    likes: 88,
    author: "Cally Izacenko"
  },
  {
    id: 2018,
    title: "Son of Flubber",
    description: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    date: "20-08-2022",
    likes: 99,
    author: "Reta Passingham"
  },
  {
    id: 195,
    title: "Breakfast of Champions",
    description: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    date: "27-08-2022",
    likes: 8,
    author: "Wadsworth Milham"
  },
  {
    id: 6730,
    title: "Collector, The",
    description: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    date: "18-07-2022",
    likes: 76,
    author: "Andrey Blyden"
  },
  {
    id: 6899,
    title: "Earth",
    description: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    date: "25-03-2023",
    likes: 9,
    author: "Donnie Berthel"
  },
  {
    id: 414,
    title: "Who Pulled the Plug? (Göta kanal eller Vem drog ur proppen?)",
    description: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    date: "24-04-2023",
    likes: 47,
    author: "Hestia Coite"
  },
  {
    id: 6403,
    title: "The Ghosts in Our Machine",
    description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    date: "05-03-2023",
    likes: 61,
    author: "Marge Tarr"
  },
  {
    id: 7857,
    title: "One of Our Aircraft Is Missing",
    description: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    date: "16-09-2022",
    likes: 50,
    author: "Rutter Munson"
  },
  {
    id: 1262,
    title: "Flying Fleet, The",
    description: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    date: "10-12-2022",
    likes: 36,
    author: "Alexandro Mellanby"
  },
  {
    id: 2334,
    title: "War Witch (Rebelle)",
    description: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    date: "30-07-2022",
    likes: 7,
    author: "Inez Falk"
  },
  {
    id: 8697,
    title: "Danube Exodus, The",
    description: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    date: "01-09-2022",
    likes: 51,
    author: "Lorie Rentelll"
  },
  {
    id: 5126,
    title: "3 Penny Opera, The (Threepenny Opera, The) (3 Groschen-Oper, Die)",
    description: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    date: "28-11-2022",
    likes: 21,
    author: "Arline Allon"
  },
  {
    id: 9235,
    title: "Trade",
    description: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    date: "15-01-2023",
    likes: 71,
    author: "Sigismundo Shelbourne"
  },
  {
    id: 8113,
    title: "Westbound",
    description: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    date: "24-05-2023",
    likes: 8,
    author: "Fran Gawkes"
  },
  {
    id: 2129,
    title: "Show Me",
    description: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    date: "09-01-2023",
    likes: 30,
    author: "Worden Boij"
  },
  {
    id: 1305,
    title: "Panda! Go Panda! (Panda kopanda)",
    description: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    date: "26-01-2023",
    likes: 54,
    author: "Hadley Joll"
  },
  {
    id: 4721,
    title: "Think Fast, Mr. Moto",
    description: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    date: "14-05-2023",
    likes: 5,
    author: "Lucy Eveque"
  },
  {
    id: 7169,
    title: "Cargo",
    description: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    date: "07-03-2023",
    likes: 30,
    author: "Charmane Gordon-Giles"
  },
  {
    id: 8623,
    title: "Paradise: Hope (Paradies: Hoffnung)",
    description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    date: "14-11-2022",
    likes: 49,
    author: "Malynda Sieghart"
  },
  {
    id: 8903,
    title: "Bob & Carol & Ted & Alice",
    description: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    date: "26-04-2023",
    likes: 13,
    author: "Christen Joris"
  },
  {
    id: 5538,
    title: "Vice",
    description: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    date: "24-06-2023",
    likes: 22,
    author: "Rozalie Buckerfield"
  },
  {
    id: 8152,
    title: "Decalogue, The (Dekalog)",
    description: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    date: "20-01-2023",
    likes: 100,
    author: "Pyotr Calcraft"
  },
  {
    id: 5340,
    title: "Hallelujah!",
    description: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    date: "27-06-2023",
    likes: 100,
    author: "Amalia Shearsby"
  },
  {
    id: 4200,
    title: "Clown",
    description: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    date: "02-01-2023",
    likes: 34,
    author: "Fred Barbey"
  },
  {
    id: 67,
    title: "Romeo and Juliet",
    description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    date: "28-10-2022",
    likes: 69,
    author: "Cullen O'Crigan"
  },
  {
    id: 4317,
    title: "Italianamerican",
    description: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    date: "31-05-2023",
    likes: 64,
    author: "Dalston Stannion"
  },
  {
    id: 9840,
    title: "Bats",
    description: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    date: "28-10-2022",
    likes: 20,
    author: "Bertie Lamball"
  }
]