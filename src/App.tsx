import React from 'react';
import GalleryBox from "./GalleryBox";
import './App.css';

// some fake data to simulate passing in actual gallery data
const fakeData = [{
  title: 'NATURE VS. MAN',
  image: './testImage.svg'
},{
  title: 'NATURE VS. WOMAN',
  image: './testImage.svg'
}
,{
  title: 'NATURE VS. TAXES',
  image: './testImage.svg'
},
{
  title: 'NATURE VS. NATURE',
  image: './testImage.svg'
},{
  title: 'BEAR VS. MAN',
  image: './testImage.svg'
}
,{
  title: 'DOLPHIN VS. MAN',
  image: './testImage.svg'
},
{
  title: 'ELEPHANT VS. MAN',
  image: './testImage.svg'
},{
  title: 'NATURE',
  image: './testImage.svg'
}
,{
  title: ' VS. ',
  image: './testImage.svg'
},
{
  title: 'NATURE MAN',
  image: './testImage.svg'
},{
  title: 'MAN NATURE',
  image: './testImage.svg'
}
,{
  title: 'MAN MAN. MAN',
  image: './testImage.svg'
},
{
  title: 'VS VS. VS',
  image: './testImage.svg'
},{
  title: 'NATURE VS. VS',
  image: './testImage.svg'
}
,{
  title: 'VS VS. MAN',
  image: './testImage.svg'
},
{
  title: 'MAN',
  image: './testImage.svg'
},{
  title: 'MAN VS. MAN',
  image: './testImage.svg'
}
,{
  title: 'MAN VS. MAN VS. MAN',
  image: './testImage.svg'
}]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Taft - Multimedia Gallery
        </h3>
      </header>
      <GalleryBox {...fakeData}/>
    </div>
  );
}

export default App;
