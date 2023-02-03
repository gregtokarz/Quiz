import React from "react";
import Film from "./Film";
import Logo from "./Logo";
import Navigator from "./Navigator";
import Footer from "./Footer";
import axios from "axios";
import {createBrowserHistory} from "history";

const Add = () => {

    const [title, setTitle] = React.useState('');
    const [image, setImage] = React.useState('');
    const [content, setContent] = React.useState('');
    const [errorss, setErrorss] = React.useState({errors: {}});
    const history= createBrowserHistory();

    const handleChangeRoute = () => {

        history.push('/');
        window.location.reload();
        alert("Film został dodany pomyślnie")
    };

    const validate = () => {

        const errors = {};
        if (title.trim() === '') {
            errors.title = 'Title is required!';
        }
        if (image.trim() === '') {
            errors.image = 'Image is required!';
        }
        if (content.trim() === '') {
            errors.content = 'Content is required!';
        }

        return Object.keys(errors).length === 0 ? null : errors;

    };
    const handleSubmit = (event) => {
        event.preventDefault();

        const errors = validate();
        setErrorss({ errors: errors || {} })
        if (errors) return;


        axios({
            method: 'post',
            url: 'https://at.usermd.net/api/movies',
            data: {
                title: title,
                image: image,
                content: content
            }
        }).then((response) => {
            handleChangeRoute();
        }).catch((error) => {
            const errors = {};
            errors.password = 'Problem with adding film!';
            console.log(error);
        })}

    return (
        <div>
            <div style={{width: '1000px', margin: 'auto'}}>
                <Logo/>
                <Navigator/>
                <form onSubmit={handleSubmit}>
                    <div id="id" className="p-5 text-white">
                        <div className="rounded-4 p-3" style={{width: 500, margin: 'auto', backgroundColor: '#7fbfff'}}>
                        <div className="text-black fs-5" style={{width: 300, margin: 'auto',}}>
                            <p className="fs-3 text-center fw-bold">Dodaj film</p>
                            <div className="form-body">
                                <div className="title">
                                    <label className="form__label" htmlFor="title">Title: </label>
                                    <input className="form-control" type="text" id="title" onChange={(e) => setTitle(e.target.value)}/>
                                    {errorss.errors.title &&
                                      <div className="alert alert-danger">{errorss.errors.title}</div>}
                                </div>
                                <div className="image">
                                    <label className="form__label" htmlFor="image">Image </label>
                                    <input className="form-control" type="text" id="image" onChange={(e) => setImage(e.target.value)}/>
                                    {errorss.errors.image &&
                                      <div className="alert alert-danger">{errorss.errors.image}</div>}
                                </div>
                                <div className="content">
                                    <label className="form__label" htmlFor="content">Content </label>
                                    <input className="form-control" type="text" id="content" onChange={(e) => setContent(e.target.value)}/>
                                    {errorss.errors.content &&
                                      <div className="alert alert-danger">{errorss.errors.content}</div>}
                                </div>

                            </div>
                            <div className="footer" style={{textAlign: 'center', marginTop: 30, marginBottom: 20}}>
                                <button type="submit" className="btn btn-primary">Dodaj film</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </form>
                <Footer/>
            </div>
        </div>
);
};

export default Add;
