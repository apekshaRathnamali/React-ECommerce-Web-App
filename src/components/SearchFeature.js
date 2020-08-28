import React, {useState} from 'react'
import {Input} from 'antd';
const {Search} = Input;

function SearchFeature(){
    const [SearchTerms, setSearchTerms] = useState("")
    const onchangeSerach=(event)=> {
        setSearchTerms(event.currentTarget.value)

        
    }
    
        return (
            <div>
                <Search
                value={SearchTerms}
                onchange={onchangeSerach}
                placeholder="Search"
                />
            </div>
        ) 
}
export default SearchFeature