import { useState } from 'react'
import './App.css'
import Tours from './tours/Tours';

const toursData = [
  {
    id: 1,
    imgLink: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1240/Ranthambore-Family-Getaway-21102016.jpg?crop=188:139&downsize=188:139",
    name: "Wild Spaces",
    description: "Wild spaces refer to natural environments, such as forests, grasslands, deserts, and wetlands, which are relatively untouched by human activities. These spaces play a vital role in maintaining biodiversity, supporting wildlife, and providing ecological services, such as filtering and purifying water, regulating carbon storage, and combating climate change. Wild spaces also offer numerous recreational opportunities, such as hiking, camping, and wildlife watching, as well as cultural, spiritual, and aesthetic values. ",
    price:"7,500"

  },
  {
    id: 2,
    imgLink: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/4916/kuta.jpg?crop=156:227&downsize=156:227",
    name: "Bali",
    description: "Most of Bali is mountainous (essentially an extension of the central mountain chain in Java), the highest point being Mount Agung, or Bali Peak, 10,308 feet in height and known locally as the “navel of the world.” It proved to be an active volcano, erupting in 1963, killing more than 1,500 persons and leaving thousands homeless. The main lowland is south of the central mountains. The period of the southeast monsoon is the dry season. Bali’s flora and fauna resemble those of Java. Some teak grows on Bali, and the giant banyan trees are held sacred by the Balinese. Tigers are found in the west, and deer and wild pigs are numerous.",
    price:"15,000"

  },
  {
    id: 3,
    imgLink: "https://hblimg.mmtcdn.com/content/hubble/img/Narkanda/mmt/activities/t_ufs/m_activities_narkanda_shimla_l_329_493.jpg",
    name: "shimla",
    description: "Simla, also known as Shimla, is the capital city of the northern Indian state of Himachal Pradesh. Located in the Himalayas, the city is known for its natural beauty and scenic mountain vistas. It is also known for its colonial architecture, which reflects its history as a popular destination for British travelers. The city is home to several landmarks and historical sites, including the Viceroys' House, the Ridge Road, and the Shimla Summer Palace, as well as numerous religious temples and shrines.",
    price:"13,000"
  },
  {
    id:4,
    imgLink: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRJmcRmNaTslvc1D2ylxohS_u4Zm6F4Q1atwS9AHgm_SLwev0aJ",
    name:"Himachal",
    description: "Himachal Pradesh is a state in northern India, bordered by the Tibet Autonomous Region to the north, Uttarakhand to the south, Punjab to the west, and Jammu and Kashmir to the east. The state is known for its stunning natural beauty, including snow-capped mountains, deep valleys, and lush forests. It is also home to several important religious sites, including the Dhaulagiri Temple and the Tirthankara Parvat. Himachal Pradesh is a popular tourist destination, with activities such as trekking, skiing, and paragliding. The state is also known for its rich cultural heritage, including traditional music",
    price: "19,999"
  },
  {
    id:5,
    imgLink: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1369/A%20Short%20Trip%20to%20Munnar%20and%20Allepey.jpg?crop=259:168&downsize=259:168",
    name:"kerala",
    description: "Kerala is a state located in the southernmost part of India. It is known for its unique blend of traditional culture, rich heritage, and stunning natural beauty. Kerala is also known as the Gods Own Country due to its breathtaking landscapes, which include lush forests, serene backwaters, and beautiful beaches. The state is famous for its traditional Kerala cuisine, which features fresh seafood, aromatic spices, and flavorful rice dishes. Kerala is also home to several ancient temples, palaces, and cultural centers that showcase the states rich history and heritage. Overall, Kerala is a unique and beautiful destination that offers a fascinating glimpse into India",
    price: "17,999"
  },
  {
    id:6,
    imgLink: "https://www.holidify.com/images/cmsuploads/compressed/783_20190430172256.jpg",
    name:"vizag",
    description: "Visakhapatnam, often referred to as Vizag, is a city and port in the Indian state of Andhra Pradesh. It is known for its beautiful beaches, rich cultural heritage, and modern infrastructure. Some popular tourist destinations in Vizag include Ramakrishna Beach, Kailashgiri Fort, Rashi Bay, and the Similipalarni Temple. Additionally, visitors can enjoy a variety of activities such as water sports, sightseeing, and shopping at local markets. With its pleasant climate, friendly locals, and diverse range of attractions, Vizag is a great destination for tourists of all ages.",
    price: "9,999"
  },
  {
    id:7,
    imgLink: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1228/Mysore.jpg?crop=460:300&downsize=460:300",
    name:"Mysore",
    description: "Mysore is a popular tourist destina in India known for its rich history, beautiful architecture, and cultural heritage. Some of the top tourist places to visit in Mysore include the Mysore Palace, which was once the royal residence of the Wodeyar dynasty; the Sri Chamundeshwari Temple, a Hindu temple dedicated to the goddess Durga; and the Mysore Zoo, which is home to a wide variety of animals, including tigers, elephants, and giraffes. Other popular attractions in Mysore include the Mysore Museum, the Kodihalli Caves, and the Ramanagara Hill, which was used as a filming location for",
    price: "8,999"
  },
  {
    id:8,
    imgLink: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/cc/bf/59/manjehalli-waterfalls.jpg?w=500&h=400&s=1",
    name:"waterfalls in hassan",
    description: "Waterfalls are a major tourist attraction in Hassan, which is located in the western Ghats region of India. Some popular waterfalls in Hassan include Yagachi Falls, Hebbaragundi Falls, and Udupi Falls. These waterfalls are surrounded by lush greenery and offer breathtaking views of the natural landscape. Many visitors also enjoy activities such as trekking, swimming, and picnicking at these locations.",
    price: "9,999"
  },
  {
    id:9,
    imgLink: "https://www.holidify.com/images/cmsuploads/compressed/80_big_20181017172835_20181017172851.jpg",
    name:"Victory at Sea War Memorial",
    description: "Victory at Sea War Memorial was built in 1996 to honour the brave sailors of Indian Navy and the Eastern Naval Command who fought the Indo-Pak War and sunk PNS Gazi, a Pakistani Submarine when Pakistan targeted the Visakhapatnam Port to destroy INS Vikrant, an Indian Aircraft Carrier. PNS Gazi was defeated at the coast of the city of Visakhapatnam. Hence, the Victory at Sea War Memorial has been built in the memory of the first battle victory in the Liberation War. The memorial is a decent attraction to take children to increase their knowledge about the historical battles, tensions and outcomes. As they say, we must sometimes look back to be able to take better steps in the future. Visiting memorials and historic sites is one of the ways to do that.",
    price: "999"
  },
  {
    id:10,
    imgLink: "https://www.holidify.com/images/cmsuploads/compressed/INS_Kursura_(S20)_20180317150517.jpg",
    name:"Submarine Museum, Visakhapatnam",
    description:"The INS Kurusura served the Indian Navy for 31 years before it was decommissioned in 2001. Post that, it was used a museum to spread awareness about Indian Naval Forces, the technology used and its development in India. It is a one of a kind project that was launched by the Eastern Naval Command. The interiors of the submarine have been re-arranged to allow a clear view to the visitors. It is the only Submarine Museum in the entire of Asia. A visit to the museum is not only a must to gain some knowledge but also to rejuvenate a feeling of patriotism and pride for our country and for the warriors who fought and even lost their lives for our freedom.",
    price: "1,999"
  }
];

function App() {
  const [currentToursData, setCurrentToursData] = useState(toursData);

  function removeTour(currentId) {
    setCurrentToursData(currentToursData.filter((tour) => tour.id !== currentId));
  }

  return (
    <div className='demo'>
    <h1>Our Tours</h1> 
    <div className='app'>
      {
        currentToursData.map((tour) => {
          return <Tours key ={tour.id} tour={tour} removeTour={removeTour} />
       })
      }

    </div>


    </div>
  )
}

export default App
