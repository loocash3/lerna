const Segment = content => {
    const segment = document.createElement("div");
    segment.innerText = content;
    segment.style.border = "1px solid grey";
    segment.style.padding = "20px";
    segment.style.borderRadius = "10px";

    return segment;
}

export default Segment;