async function newPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector("input[name='title']").value;
    const post_url = document.querySelector("input[name='content']").value;

    const response = await fetch(`/api/posts`, {
        method: "POST",
        body: JSON.stringify({
            title,
            post_url,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert(response.statusText);
    }
}

document
    .querySelector(".add-post-form")
    .addEventListener("submit", newPostHandler);