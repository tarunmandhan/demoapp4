import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const name="tarun's";
const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/255/300";
const img3="https://picsum.photos/295/300";
const link1="https://gaana.com/lyrics/moh-moh-ke-dhaage-male"
ReactDOM.render(
<> 

<h1 className="heading" ContentEditable="true"> This is {name} Gallery</h1>
<div className="allimg" >
<img src={img1} alt="something wrong" />
<a href={link1} target="_blank">
<img src={img2} alt="something wrong" />
</a>
<img src={img3} alt="something wrong" /> 
</div>

</>
,document.getElementById('root'));