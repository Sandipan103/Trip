const Data = [
  {
    id: "1",
    name: "Taj Mahal",
    description:
      "The iconic Taj Mahal, a white marble mausoleum in Agra, symbolizes eternal love. Built by Emperor Shah Jahan for his wife Mumtaz Mahal, its beauty and history are awe-inspiring.",
    photoLink: "https://imgs.search.brave.com/FodlKPf_D4uOPHASS7e898nILpRGVt7iwtZhVwbIlP4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjM2/MTQzNDU2L3Bob3Rv/L3Rhai1tYWhhbC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Q0FYUzJ5Tk1UX1hX/OHFOQkdlT3BjZXcy/SGpHaG9hLTRGU0gz/dlJVMzBzMD0",
    packagePrice: "$20",
  },
  {
    id: "2",
    name: "Jaipur",
    description:
      "Jaipur, the Pink City, captivates with its grand forts, palaces, and bustling markets. Discover the opulent Amber Fort, ornate City Palace, and the unique Hawa Mahal.",
    photoLink: "https://imgs.search.brave.com/xD5pD6xTiUCOl2nucEPUMJ4NRP8B_Y_HpdjrMhlIpFs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjE5NjIz/ODc0NzItNTUzZDk2/ZWQwMWEzP2l4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4TVRsOGZHcGhh/WEIxY254bGJud3dm/SHd3Zkh4OE1BPT0m/dz0xMDAwJnE9ODA",
    packagePrice: "$15",
  },
  {
    id: "3",
    name: "Kerala Backwaters",
    description:
      "Experience tranquility in Kerala's Backwaters, where picturesque canals wind through lush landscapes. This serene cruise offers a rejuvenating escape into nature's embrace.",
    photoLink: "https://imgs.search.brave.com/493sNX7ojWmfacB4Rg4OlkrNY6DJ-oJB9p1hRv7nhT0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDc3/MDMzMDQ0L3Bob3Rv/L2hvdXNlYm9hdC1v/bi10aGUta2VyYWxh/LWJhY2t3YXRlcnMt/aW4taW5kaWEuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTRU/SmZVVlBkUE9oby1q/bFRJTUhFYnlXekVq/dEVBdS0xb3FyUzha/NElOakE9",
    packagePrice: "$30",
  },
  {
    id: "4",
    name: "Varanasi",
    description:
      "Varanasi, a spiritual nexus, beckons with ancient ghats lining the Ganges River. Witness the mesmerizing evening Aarti ceremony and delve into the city's profound spirituality.",
    photoLink: "https://imgs.search.brave.com/N6F5rfr2rhUuLAC0_Tbnqj1cKanJD2YBkm7ey1UuUDQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDY2MTI5/MzYuanBn",
    packagePrice: "$10",
  },
  {
    id: "5",
    name: "Goa",
    description:
      "Goa entices with its sun-kissed beaches, vibrant nightlife, and unique blend of Indian and Portuguese cultures. It offers a perfect blend of relaxation and excitement.",
    photoLink: "https://imgs.search.brave.com/zH0PnDMe584TXZimDiwmAsUrFTozXiQN961TL6rb6DI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIz/Mzg0NDgxL3Bob3Rv/L21vcmppbS1iZWFj/aC1nb2EtaW5kaWEu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXNjVHpzcUtnX3d5/ajhvZGxNQkZpTEx1/ckFsM1lYSE5hWXVz/MDFyaEdmSU09",
    packagePrice: "$25",
  },
  {
    id: "6",
    name: "Mysore",
    description:
      "Mysore, famed for its opulent palace and rich history, casts a spell with its intricate architecture. Embrace the regal charm and witness the grand Dasara festival.",
    photoLink: "https://imgs.search.brave.com/jnZFMt7m1Z86FdsaM0_9IJkhPCbxt8N7fRE489wzisI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/NzY1MTk2L3Bob3Rv/L3RoZS1teXNvcmUt/cGFsYWNlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz04XzRW/RVNjY0ljc0E2MlRy/UmVOSUpLQVZJMzhi/UGpVV0dWc3F4U0Zf/VGVrPQ",
    packagePrice: "$12",
  },
  {
    id: "7",
    name: "Leh-Ladakh",
    description:
      "Discover Leh-Ladakh, a high-altitude desert paradise boasting breathtaking landscapes, tranquil monasteries, and thrilling trekking routes for adventure enthusiasts.",
    photoLink: "https://imgs.search.brave.com/hxPwevpwVmj7yMzDBbzpqCYyLKQ15SZVSCawcCSm7Jg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIx/OTQ4MzU2Ny9waG90/by9sYW5kc2NhcGUt/b2Ytc2FuZC1kdW5l/cy1hdC1udWJyYS12/YWxsZXktbGFkYWto/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz0wOE1LRGFMODZC/clc1NlhvWC1kOVNh/bmxVQ0RxZEdUcHAw/NTd1TDRzUEpNPQ",
    packagePrice: "$40",
  },
  {
    id: "8",
    name: "Rajasthan Desert",
    description:
      "Embark on camel safaris and explore the captivating sand dunes of Rajasthan's desert. Immerse yourself in the unique culture and traditions of desert communities.",
    photoLink: "https://imgs.search.brave.com/g-w99f-37t7AI3eTx_xhTsij5fFob3ozyo8zdO5Xs20/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/NDI4MDY0Ni9waG90/by9ncmVhdC1pbmRp/YW4tZGVzZXJ0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1n/RHNYZ2pCTlBtdWlP/eC1ka25wc0UzamNj/NXM5VHp3WUlyQUd3/d3JKRE9NPQ",
    packagePrice: "$18",
  },
  {
    id: "9",
    name: "Khajuraho Temples",
    description:
      "The Khajuraho Temples, a UNESCO heritage, intrigue with intricate sculptures reflecting human emotions and life. They stand as a testament to India's rich cultural heritage.",
    photoLink: "https://imgs.search.brave.com/oDpRXOBN1QwNU2a8FLDYY7tDorf0PI52grA1YH-ZUyw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDk0/MDk0OTQzL3Bob3Rv/L2toYWp1cmFoby10/ZW1wbGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUVVcEhF/M0swblNRMUJpYmE3/a2IxN1ZjZ3p2em1Z/dk0tN1gxTDZHZ3FG/eGc9",
    packagePrice: "$14",
  },
  {
    id: "10",
    name: "Agra Fort",
    description:
      "Agra Fort, a UNESCO site, unveils Mughal grandeur with impressive architecture and a storied past. Immerse in history as you explore this majestic fortress.",
    photoLink: "https://imgs.search.brave.com/48IZ8mQKgMRDA1fFT2wmRsFgXiVaNcTg2WGNp250JQs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY2/MTE0NTU5L3Bob3Rv/L2FncmEtZm9ydC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Y3pKaXBDMnQ1ZXN6/Rzd0dXJSVzdjMEJf/RVBuXy1FLVNUUGNh/UHRtMnJqcz0",
    packagePrice: "$8",
  },
];

export default Data;
