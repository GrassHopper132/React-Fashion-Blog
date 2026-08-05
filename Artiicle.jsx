
export default function Article({ date, title, imageSrc, imageAlt, text }) {
  return (
    <article>
      <time dateTime={date}>{date}</time>
      <h2>{title}</h2>
      <img src={imageSrc} alt={imageAlt} />
      <p>{text}</p>
      <a href="#" className="continue-link">continues...</a>
    </article>
  );
}
