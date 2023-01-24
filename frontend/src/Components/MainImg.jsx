import Cats from '../Images/Cats.jpg';


function MainImg () {
    return (
        <div className="container1">
            <img className='cats' src={Cats} alt='Cats'/>
            <div className='thetext'>
                <h1 className="cattext"><span className='boldcat'>CAT</span>alog</h1>
                <p className='text1'>Reuniting cats with<br></br> their owners</p>
            </div>
        </div>
        //<a href="#">RunForYour<span class="LastWord">Life</span></a>

      );
}

export default MainImg;