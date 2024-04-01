//All of the imports
import juliesmom_propic from '../technical-takehome-bbu/photos/juliesmom_propic.jpg'
import momma2be_propic from '../technical-takehome-bbu/photos/momma2be_propic.jpg'
import samantha_propic from '../technical-takehome-bbu/photos/samantha_propic.jpg'
import texasmomma_propic from '../technical-takehome-bbu/photos/texasmomma_propic.jpg'
import users from '../technical-takehome-bbu/users.json'
import posts from '../technical-takehome-bbu/posts.json'
import Image from 'next/image'
import Link from 'next/link'


export default function Page() {
    /*
    This function is responsible for rendering the community page.
    Contains text, posts, and the terms of service on the bottom of the page.
    */
    return (
            <div className = " mb-10 ml-10 pt-10 mr-10 ">
                <div className = "font-bold text-[#560000] text-4xl"> Community</div>
                <div className="text-[#8f4f3f] italic font-mono mt-3"> Connection is the heartbeat of our lives; we are stronger together!</div>
                <Posts className = ""/>
                <div className = "mt-6 text-white text-center">
                    <div className = "font-semibold mb-4"> 2022 Birth By Us, Inc. All rights reserved.</div>
                    <div className = "mb-3"> Disclaimer: Birth By Us does not provide medical advice. Our services are not a form of healthcare or medical advice. Any information presented to you through our services are meant for informational purposes only.
                        If you have any questions or concerns related to your physical or mental health, contact your healthcare provider. By using our services, you understand and agree that Birth By Us is not a licensed practitioner or medicine.
                    </div>
                    <div className = "font-semibold">
                        For the full Birth By Us Terms of Service, click <Link href = "./insights">here</Link>.
                    </div>
                </div>
            </div>
            )
}

// these are the loaded images made into an object
let images = {
    "juliesmom_propic.jpg": juliesmom_propic,
    "momma2be_propic.jpg": momma2be_propic,
    "samantha_propic.jpg": samantha_propic,
    "texasmomma_propic.jpg": texasmomma_propic
}

function Post(props){
    /*
    This function is responsible for rendering a single post in the community page,
    it takes the content of the post and the id of the user who posted it.
    */

    //get the date of the post, format it, and add one day to it (because the JS Date object is weird)
    let newFormatDate = new Date(props.date)
    newFormatDate.setDate(newFormatDate.getDate() + 1)
    let day = newFormatDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

    return (
        <div className="flex flex-col bg-[#FFFFFF] p-4 rounded-lg  ">
            <div className = "flex mb-4 ">
                <Image  className = "rounded-full object-cover h-16 w-16" src = {images[users[props.id-1].profile_photo]} alt = "Profile Picture" />
                <span>
                    <div className = "font-sans text-large text-[#550000] font-bold ml-4 mt-2 ">@{users[props.id-1].username}</div>
                    {/* get date in the format : Monday, March 25th, 2024 current: 2024-03-25 */}
                    <span className = "text-[#8F4F41] ml-4 italic font-extralight"> {day} </span>
                </span>
            </div>            
            <div className="">{props.content}</div>

        </div>
    )
}
function Posts() {
    /*
    This function is responsible for rendering the posts in the community page,
    it takes the posts from the posts.json file and sorts them by date.
    */

    //sort the posts by date by telling the sort function to compare the dates and how to do it
    posts.sort((a,b) => {
        let dateA = a.date.split("-")
        let dateB = b.date.split("-")
        if (dateA[0] != dateB[0]){
            return dateA[0] - dateB[0]
        }
        if (dateA[1] != dateB[1]){
            return dateA[1] - dateB[1]
        }
        return dateA[2] - dateB[2]
    })
    return (
        <div className=" mt-4 flex flex-col space-y-4 ">
            {posts.map((message) => {
                // for each post, create a Post component and pass the content
                return <Post key = {Math.random()} content = {message.content}  id = {message.id} date = {message.date} />
            })}
        </div>
    )
}