import Header from "@/components/Header"
import SingleItemPage from "@/components/Pages/SingleItemPage"
import { notFound } from "next/navigation"

const Page = ({ params }: { params: { slug: string }}) => {
    const id = params.slug

    const articles = [
        {
            id: "1",
            title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, quibusdam veniam. Vero, eveniet velit alias voluptates ut quam eos! Doloremque, eligendi dicta labore soluta amet quia libero quidem eveniet quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus magni blanditiis. Aliquid vel tenetur, dolor necessitatibus perspiciatis beatae quibusdam iure distinctio cum quos, nam ex ratione accusamus laudantium officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ab modi illum quidem corrupti, dicta laboriosam quos in temporibus! Unde, cupiditate illo? In consequuntur a exercitationem et, consectetur vel aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sed? Perspiciatis vel, nostrum quidem accusamus minima molestias deserunt culpa modi saepe corporis possimus pariatur dolorem quaerat, similique maiores reiciendis quas.",
            image: "https://media.istockphoto.com/id/507707436/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B5%D0%BD%D0%B7%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%BD%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=0116wUGpAjcUXXSwoDEv1PdSbn1LppD4VmfwEbH8EeU=",
            optionalImages: [
                "https://media.istockphoto.com/id/507707436/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B5%D0%BD%D0%B7%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%BD%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=0116wUGpAjcUXXSwoDEv1PdSbn1LppD4VmfwEbH8EeU=",
                "https://media.istockphoto.com/id/507707436/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B5%D0%BD%D0%B7%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%BD%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=0116wUGpAjcUXXSwoDEv1PdSbn1LppD4VmfwEbH8EeU=",
                "https://media.istockphoto.com/id/507707436/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B5%D0%BD%D0%B7%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%BD%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=0116wUGpAjcUXXSwoDEv1PdSbn1LppD4VmfwEbH8EeU=",
                "https://media.istockphoto.com/id/507707436/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B5%D0%BD%D0%B7%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%BD%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=0116wUGpAjcUXXSwoDEv1PdSbn1LppD4VmfwEbH8EeU=",
            ],
            date: "Aug 24, 2024",
            type: "Article",
        },
        {
            id: "2",
            title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, quibusdam veniam. Vero, eveniet velit alias voluptates ut quam eos! Doloremque, eligendi dicta labore soluta amet quia libero quidem eveniet quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus magni blanditiis. Aliquid vel tenetur, dolor necessitatibus perspiciatis beatae quibusdam iure distinctio cum quos, nam ex ratione accusamus laudantium officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ab modi illum quidem corrupti, dicta laboriosam quos in temporibus! Unde, cupiditate illo? In consequuntur a exercitationem et, consectetur vel aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sed? Perspiciatis vel, nostrum quidem accusamus minima molestias deserunt culpa modi saepe corporis possimus pariatur dolorem quaerat, similique maiores reiciendis quas.",
            image: "https://media.istockphoto.com/id/1224034151/photo/three-heavy-industry-engineers-stand-in-pipe-manufacturing-factory-use-digital-tablet.webp?b=1&s=612x612&w=0&k=20&c=UUnB3KFMDD-e_47-TxL79OrrgCkJDOMe_6Zk3ePbjaY=",
            optionalImages: [
                "https://media.istockphoto.com/id/1224034151/photo/three-heavy-industry-engineers-stand-in-pipe-manufacturing-factory-use-digital-tablet.webp?b=1&s=612x612&w=0&k=20&c=UUnB3KFMDD-e_47-TxL79OrrgCkJDOMe_6Zk3ePbjaY=",
                "https://media.istockphoto.com/id/1224034151/photo/three-heavy-industry-engineers-stand-in-pipe-manufacturing-factory-use-digital-tablet.webp?b=1&s=612x612&w=0&k=20&c=UUnB3KFMDD-e_47-TxL79OrrgCkJDOMe_6Zk3ePbjaY=",
                "https://media.istockphoto.com/id/1224034151/photo/three-heavy-industry-engineers-stand-in-pipe-manufacturing-factory-use-digital-tablet.webp?b=1&s=612x612&w=0&k=20&c=UUnB3KFMDD-e_47-TxL79OrrgCkJDOMe_6Zk3ePbjaY=",
                "https://media.istockphoto.com/id/1224034151/photo/three-heavy-industry-engineers-stand-in-pipe-manufacturing-factory-use-digital-tablet.webp?b=1&s=612x612&w=0&k=20&c=UUnB3KFMDD-e_47-TxL79OrrgCkJDOMe_6Zk3ePbjaY=",
            ],
            date: "Aug 15, 2024",
            type: "Article",
        },
    ]

    const article = articles.find((article) => article.id === id)

    if (!article) {
        return notFound()
    }

    return (
        <div>
            <Header text="News" backgroundImage="https://media.istockphoto.com/id/1220724113/photo/falling-crude-oil-prices.jpg?s=612x612&w=0&k=20&c=eYHcAOQSV1pD2SBTkjklHJ2XK2qOnMu4t8yIZUApV2U="/>
            <SingleItemPage itemToString={JSON.stringify(article)} />
        </div>
    )
}

export default Page