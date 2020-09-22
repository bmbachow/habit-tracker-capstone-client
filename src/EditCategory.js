import React, { Component } from 'react'

export class EditCategory extends Component {
    render() {

        return (
            <div>
                <header>
                    <h1>Edit Category Name</h1>
                </header>
                <section>
                    <form id="record-category">
                        <div className="form-section">
                            <label htmlFor="category-name">Category Name</label>
                            <input type="text" name="category-name" required />
                            <p className="required">name required</p>
                        </div>
                        <div className="form-section">
                            <label htmlFor="category-description">Category Description</label>
                            <textarea name="category-description" rows="10"></textarea>
                        </div>
                        <div className="submit">
                            <input type="submit" defaultValue="Submit" />
                            <input type="reset" defaultValue="Reset" />
                        </div>
                        <div className="delete">
                            <input type="button" defaultValue="Delete" />
                            <span><p>Are you Sure?</p><input type="button" defaultValue="Yes" /><input type="button" defaultValue="No" /></span>
                        </div>
                    </form>
                </section>
            </div>
        )
    }
}

export default EditCategory
