import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Cards from './components/Cards';
import Footer from './components/Footer';




function App(){
    return (
        <>
        <Navbar/>
        <Carousel />

        <div className="flex justify-center gap-10 mt-5 flex-wrap mb-10">
            <Cards src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" title="Ice Cream" description="A sweet, frozen dessert made from cream, sugar, and various flavors." />
            <Cards src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" title="Graphes" description="Mathematical diagrams used to represent and analyze relationships." />
            <Cards src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" title="Lemon" description=" A tangy, yellow citrus known for its sour flavor used in cooking." />
            <Cards src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp" title="Orange" description="An orange is a sweet, juicy citrus fruit with a vibrant orange flavor." />
            <Cards src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" title="strawberry" description="A strawberry is a sweet, red fruit with a juicy texture fragrant aroma." />
            <Cards src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" title="pineapple" description="A pineapple is a tropical fruit with tough tangy flesh that offers a juicy." />
        </div>

        <Footer />
        </>

    )

}

export default App;