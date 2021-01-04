let artist = 'michael jackson';
let song = 'bad';

async function getData(e) {

  // e.preventDefault()

  // artist = e.target.children.artist.value;
  // song = e.target.children.song.value;

  const root = document.querySelector('.root');
  const root2 = document.querySelector('.root2');

  let url = await getImg();
  let status = await getLyrics();

  // console.log(url);
  // console.log(status);

  root.innerHTML = `<img src='${url}'>`;
  root2.innerHTML = `<p>${status}</p>`;

}


getData()

async function getImg() {

  let url;

  await fetch('https://picsum.photos/200/300', {})
    .then(data => {
      url = data.url;

    }).catch(e => {
      console.error(e)
    })
  return url;
}

async function getLyrics() {

  // let artist = 'michael jackson';
  // let song = 'bad';
  let status;

  await fetch(`https://sridurgayadav-chart-lyrics-v1.p.rapidapi.com/apiv1.asmx/SearchLyricDirect?artist=${encodeURI(artist)}&song=${song}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "3141833d07msh1c4d90f6d62efb2p1b4fccjsn887bca0704a2",
        "x-rapidapi-host": "sridurgayadav-chart-lyrics-v1.p.rapidapi.com"
      }
    })
    // .then(r => r.json())
    .then(data => {
      console.log(data);
      status = data.status;
    })
    .catch(e => {
      console.error(e);
    })
  return status;
}


// xmlh
// async function getLyrics2() {

  let Lyrics;
  const data = null;

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      let xml = this.responseText;
      // console.log(xml)
      let parser = new DOMParser(),
      xmlDoc = parser.parseFromString(xml, 'text/xml')
      console.log(xmlDoc.getElementsByTagName('Lyric')[0].innerHTML)
      Lyrics = xmlDoc.getElementsByTagName('Lyric')[0].innerHTML;
      // .getElementByTagName('')
    }
  });


    xhr.open("GET", "https://sridurgayadav-chart-lyrics-v1.p.rapidapi.com/apiv1.asmx/SearchLyricDirect?artist=michael%20jackson&song=bad");
    xhr.setRequestHeader("x-rapidapi-key", "3141833d07msh1c4d90f6d62efb2p1b4fccjsn887bca0704a2");
    xhr.setRequestHeader("x-rapidapi-host", "sridurgayadav-chart-lyrics-v1.p.rapidapi.com");



  xhr.send(data);
//   return Lyrics;
// }
// xmlh