async function getData() {

  const root = document.querySelector('.root');
  const root2 = document.querySelector('.root2');

  let url = await getImg();
  let status = await getLyrics();

  // console.log(url);
  // console.log(status);

  root.innerHTML = `<img src='${url}'>`;
  root2.innerHTML = `<h1>${status}</h1>`;

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

  let artist = 'michael jackson';
  let song = 'bad';
  let status;
  console.log(encodeURI(artist));

  await fetch(`https://sridurgayadav-chart-lyrics-v1.p.rapidapi.com/apiv1.asmx/SearchLyricDirect?artist=${encodeURI(artist)}&song=${song}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "3141833d07msh1c4d90f6d62efb2p1b4fccjsn887bca0704a2",
        "x-rapidapi-host": "sridurgayadav-chart-lyrics-v1.p.rapidapi.com"
      }
    })
    .then(data => {
      console.log(data);
      status = data.status;
    })
    .catch(e => {
      console.error(e);
    })
    return status;
}
