export function errorAPI() {
    const Feed = document.querySelector('#Feed');

    Feed.innerHTML = `<div class='page-not-found'>
        <span>404</span>
        <p>La data que vous demandez n'existe pas.</p>
        </div>`;
}
