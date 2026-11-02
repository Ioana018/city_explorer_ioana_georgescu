export default function DestinatieCard({ destinatie, onToggle, onDelete }) {
  const { oras, tara, zile, vizitat } = destinatie

  return (
    <article className={vizitat ? 'card vizitat' : 'card'}>
      <h3>{oras}</h3>
      <p className="tara">{tara}</p>
      <p className="zile">{zile} zile</p>
      <button type="button" onClick={() => onToggle(destinatie.id)}>
        {vizitat ? 'Vizitat' : 'Marchează vizitat'}
      </button>
      <button 
        type="button" 
        onClick={() => onDelete(destinatie.id)}
        style={{ marginTop: '0.4rem', background: '#dc2626' }}
      >
        Șterge
      </button>
    </article>
  )
}