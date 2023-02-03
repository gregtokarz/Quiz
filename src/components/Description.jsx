import React from "react";
import Logo from "./Logo";
import Navigator from "./Navigator";
import Footer from "./Footer";
import Film from "./Film";
import {useLocation} from "react-router-dom";
import axios from "axios";


function Description(props){
    const location = useLocation();
    const propsData = location.state;
    const [data, setData] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);

       React.useEffect(() => {
        axios.get('https://at.usermd.net/api/movies/'+propsData).then((response) => {
            setData(response.data);
            setIsLoading(false);
        });
    }, []);

    if(isLoading){
        return null;
    } else {
    return (
        <div style={{width: '1000px', margin: 'auto'}}>
            <Logo/>
            <Navigator/>
            <div id="id" className="p-5 text-white">
                <div className="text-center align-self-center text-white fs-3 fw-bolder bg-dark">{data.title}</div>
                <div className="d-flex flex-row bg-secondary p-4">
                <img className="rounded mx-auto " src={data.image} style={{height: '420px', width: '300px'}} alt={'brak obrazu'}  />
                <div className="text-center align-self-center text-white fs-3 fw-bolder ">{data.content}</div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};
}

export default Description;
