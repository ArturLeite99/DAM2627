export default function CoreConcept({ image, title, description }) {
  return (
    <article>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
}