import React, { Component } from 'react'

export class AddCategory extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>New Category</h1>
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
                    </form>
                </section>
            </div>
        )
    }
}

export default AddCategory
