export default function Footer() {

    const currentDate = new Date;
    const currentYear = currentDate.getFullYear();
    return(<footer>Development and design by <a href="https://titerman.com" className="copyrightLink">Gene Titerman</a> © 2024-{currentYear}
        <div className="disclaimer">Projeto de hobby. <a href="/sobre#isencao-de-responsabilidade">Os dados podem estar incorretos.</a></div>
    </footer>)

}