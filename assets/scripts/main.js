export function create_main(){
    let main = document.createElement("main");
    main.className = "main"

    let text_area = document.createElement("textarea");
    text_area.className = "input_field";
    text_area.setAttribute("rows","20")

    document.body.append(main);
    main.append(text_area);

  
  
}