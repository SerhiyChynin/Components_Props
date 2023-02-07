import Header from '../Header/Header';
import Test from '../Test';
import Goods from '../Good';

const headerData = {
    site_name: 'My text site name',
    second_name: 'Hello Baby',
    nav: [
        {'link': 'nav1', 'text': 'my link'},
        {'link': 'nav2', 'text': 'my link 2'},
        {'link': 'nav3', 'text': 'my link 3'},
    ]
}

const goods = [
    {title: 'Apple', cost: 330, 'image': 'aaa'},
    {title: 'Pear', cost: 530, 'image': 'aaa'},
]

function App() {
    return (
        <div className='container'>
            {/* <Header sitename="About React" second_header="Great Of All Times" /> */}
            <Header data={headerData} />
            <Test />
            {goods.map(item =>  <Goods key = {item.title} title={item.title} cost={item.cost} image ={item.image} /> )}
        </div>
    ); 
}

export default App;