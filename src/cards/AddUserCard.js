export default function AddUserCard({name, description}) {
    return <div className={'addUserCard basketCardContainer'}>
        <div>
            <h3 className="basketCardHeader">{name}</h3>
            <div className={'addUserText'}>{description}</div>
        </div>
        <div className={'cardButtons'}>
            <div className="imageCard">+</div>
        </div>
    </div>
}