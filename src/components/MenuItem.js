import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ id, title, description, image, price }) => {
    return (
        <div className="food">
            <img src={`${process.env.PUBLIC_URL}/images/${image}`} className="image" alt={title} />
            <div className="item">
                <h1>{title}</h1>
                <h2>{description}</h2>
                <h3 className="price">${price}</h3>
            </div>
            <div className="container">
                
                <button className="button">Add</button>
            </div>
        </div>
    );
};

export default MenuItem;
