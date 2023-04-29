export function create_header(){
    let header = document.createElement("header");

    let title = document.createElement("div");
    title.className = "title_content";

    let p_title  = document.createElement("p")
    p_title.className = "title";
    p_title.innerHTML = "Виртуальная клавиатура window";

    
    document.body.append(header);
    header.append(title);
    title.append(p_title);
}