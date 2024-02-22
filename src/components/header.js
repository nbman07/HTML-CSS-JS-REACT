export default function Header(page) {
    try {
        if (document.getElementById("title") != null) {
            return document.getElementById("title").innerText = "Hello";
        } else {
            return <h1 id="title">Before</h1>
            // return <h1 id="title">{page.name}</h1>
        }
    } catch (error) {

    }

}