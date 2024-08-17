import Header from "@/components/Header"
import SingleItemPage from "@/components/Pages/SingleItemPage"
import { notFound } from "next/navigation"

const Page = ({ params }: { params: { slug: string }}) => {
    const id = params.slug
    const services = [
        {
            id: 1,
            name: "Trans-Continental",
            image: "https://media.istockphoto.com/id/693254518/photo/truck-tanker-danger-petrochemical-delivery.jpg?s=612x612&w=0&k=20&c=j7lroN1_DS90b5cq1dKii31UB4NUDabLS0iZaQkZPe4=",
            optionalImages: [
                "https://media.istockphoto.com/id/693254518/photo/truck-tanker-danger-petrochemical-delivery.jpg?s=612x612&w=0&k=20&c=j7lroN1_DS90b5cq1dKii31UB4NUDabLS0iZaQkZPe4=",
                "https://media.istockphoto.com/id/693254518/photo/truck-tanker-danger-petrochemical-delivery.jpg?s=612x612&w=0&k=20&c=j7lroN1_DS90b5cq1dKii31UB4NUDabLS0iZaQkZPe4=",
                "https://media.istockphoto.com/id/693254518/photo/truck-tanker-danger-petrochemical-delivery.jpg?s=612x612&w=0&k=20&c=j7lroN1_DS90b5cq1dKii31UB4NUDabLS0iZaQkZPe4=",
                "https://media.istockphoto.com/id/693254518/photo/truck-tanker-danger-petrochemical-delivery.jpg?s=612x612&w=0&k=20&c=j7lroN1_DS90b5cq1dKii31UB4NUDabLS0iZaQkZPe4="
            ],
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque beatae, doloremque laboriosam sapiente omnis similique quis magnam aspernatur placeat aliquam. Veniam numquam deserunt nemo qui eum blanditiis temporibus itaque quibusdam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod qui reiciendis omnis delectus eius vitae, deserunt perferendis. Ad, provident? Ipsam, rem voluptates cum illo similique assumenda molestiae! Enim, amet harum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, qui enim cumque recusandae perspiciatis laborum debitis voluptatem porro ipsam sed, nobis fuga magnam! Corrupti autem similique laboriosam. Nulla, optio ipsam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit deserunt recusandae ab nesciunt, eligendi consectetur, mollitia sequi cupiditate corporis corrupti vel enim laborum tenetur, doloremque maiores sit. Laborum, rem. Deserunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, omnis? Ducimus iste quo tenetur at. Nemo, numquam adipisci dolor accusantium, veritatis dolore a, qui modi fugiat quas temporibus nisi! Vel! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam repudiandae molestiae officiis enim beatae in minus fuga alias expedita, quaerat ipsum saepe eos laboriosam pariatur quis consectetur nam, neque nulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla veritatis nobis autem ducimus eaque quaerat, facilis quasi amet similique id repudiandae quisquam, libero, omnis et consequuntur qui! Rerum, nobis cupiditate. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas labore magnam tempora nostrum dolor facere? Cumque commodi aliquam minima labore, nobis provident placeat at dolor distinctio quidem voluptas similique? Nulla.", 
        },
        {
            id: 2,
            name: "Investment",
            image: "https://media.istockphoto.com/id/1296713112/photo/oil-barrels-on-stack-of-golden-coins-growth-rise-of-oil-stock-prices.jpg?s=612x612&w=0&k=20&c=V7cf9f5m-1P4hpeP_Z8aj4Fv0-FVFX1f6LtFklfqeco=",
            optionalImages: [
                "https://media.istockphoto.com/id/1296713112/photo/oil-barrels-on-stack-of-golden-coins-growth-rise-of-oil-stock-prices.jpg?s=612x612&w=0&k=20&c=V7cf9f5m-1P4hpeP_Z8aj4Fv0-FVFX1f6LtFklfqeco=",
                "https://media.istockphoto.com/id/1296713112/photo/oil-barrels-on-stack-of-golden-coins-growth-rise-of-oil-stock-prices.jpg?s=612x612&w=0&k=20&c=V7cf9f5m-1P4hpeP_Z8aj4Fv0-FVFX1f6LtFklfqeco=",
                "https://media.istockphoto.com/id/1296713112/photo/oil-barrels-on-stack-of-golden-coins-growth-rise-of-oil-stock-prices.jpg?s=612x612&w=0&k=20&c=V7cf9f5m-1P4hpeP_Z8aj4Fv0-FVFX1f6LtFklfqeco=",
                "https://media.istockphoto.com/id/1296713112/photo/oil-barrels-on-stack-of-golden-coins-growth-rise-of-oil-stock-prices.jpg?s=612x612&w=0&k=20&c=V7cf9f5m-1P4hpeP_Z8aj4Fv0-FVFX1f6LtFklfqeco=",
            ],
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque beatae, doloremque laboriosam sapiente omnis similique quis magnam aspernatur placeat aliquam. Veniam numquam deserunt nemo qui eum blanditiis temporibus itaque quibusdam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod qui reiciendis omnis delectus eius vitae, deserunt perferendis. Ad, provident? Ipsam, rem voluptates cum illo similique assumenda molestiae! Enim, amet harum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, qui enim cumque recusandae perspiciatis laborum debitis voluptatem porro ipsam sed, nobis fuga magnam! Corrupti autem similique laboriosam. Nulla, optio ipsam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit deserunt recusandae ab nesciunt, eligendi consectetur, mollitia sequi cupiditate corporis corrupti vel enim laborum tenetur, doloremque maiores sit. Laborum, rem. Deserunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, omnis? Ducimus iste quo tenetur at. Nemo, numquam adipisci dolor accusantium, veritatis dolore a, qui modi fugiat quas temporibus nisi! Vel! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam repudiandae molestiae officiis enim beatae in minus fuga alias expedita, quaerat ipsum saepe eos laboriosam pariatur quis consectetur nam, neque nulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla veritatis nobis autem ducimus eaque quaerat, facilis quasi amet similique id repudiandae quisquam, libero, omnis et consequuntur qui! Rerum, nobis cupiditate. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas labore magnam tempora nostrum dolor facere? Cumque commodi aliquam minima labore, nobis provident placeat at dolor distinctio quidem voluptas similique? Nulla.", 
        }, 
        {
            id: 3,
            name: "Import & Export",
            image: "https://media.istockphoto.com/id/503692502/photo/oil-rig-sea.jpg?s=612x612&w=0&k=20&c=ljdqMjp6taw8oXE6vVPlKMBI_2STq0b56-YaTlp7kwU=",
            optionalImages: [
              "https://media.istockphoto.com/id/503692502/photo/oil-rig-sea.jpg?s=612x612&w=0&k=20&c=ljdqMjp6taw8oXE6vVPlKMBI_2STq0b56-YaTlp7kwU=",  
              "https://media.istockphoto.com/id/503692502/photo/oil-rig-sea.jpg?s=612x612&w=0&k=20&c=ljdqMjp6taw8oXE6vVPlKMBI_2STq0b56-YaTlp7kwU=",  
              "https://media.istockphoto.com/id/503692502/photo/oil-rig-sea.jpg?s=612x612&w=0&k=20&c=ljdqMjp6taw8oXE6vVPlKMBI_2STq0b56-YaTlp7kwU=",  
              "https://media.istockphoto.com/id/503692502/photo/oil-rig-sea.jpg?s=612x612&w=0&k=20&c=ljdqMjp6taw8oXE6vVPlKMBI_2STq0b56-YaTlp7kwU=",  
            ],
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque beatae, doloremque laboriosam sapiente omnis similique quis magnam aspernatur placeat aliquam. Veniam numquam deserunt nemo qui eum blanditiis temporibus itaque quibusdam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod qui reiciendis omnis delectus eius vitae, deserunt perferendis. Ad, provident? Ipsam, rem voluptates cum illo similique assumenda molestiae! Enim, amet harum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, qui enim cumque recusandae perspiciatis laborum debitis voluptatem porro ipsam sed, nobis fuga magnam! Corrupti autem similique laboriosam. Nulla, optio ipsam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit deserunt recusandae ab nesciunt, eligendi consectetur, mollitia sequi cupiditate corporis corrupti vel enim laborum tenetur, doloremque maiores sit. Laborum, rem. Deserunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, omnis? Ducimus iste quo tenetur at. Nemo, numquam adipisci dolor accusantium, veritatis dolore a, qui modi fugiat quas temporibus nisi! Vel! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam repudiandae molestiae officiis enim beatae in minus fuga alias expedita, quaerat ipsum saepe eos laboriosam pariatur quis consectetur nam, neque nulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla veritatis nobis autem ducimus eaque quaerat, facilis quasi amet similique id repudiandae quisquam, libero, omnis et consequuntur qui! Rerum, nobis cupiditate. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas labore magnam tempora nostrum dolor facere? Cumque commodi aliquam minima labore, nobis provident placeat at dolor distinctio quidem voluptas similique? Nulla.", 
        },
        {
            id: 4,
            name: "Sustainability",
            image: "https://media.istockphoto.com/id/1351839574/photo/circle-with-industry-relative-silhouettes-and-3d-green-grass.jpg?s=612x612&w=0&k=20&c=OGTbFB8MLeWP1tZOOPjmSA1mkweiePniwCq7OY6FRVg=",
            optionalImages: [
                "https://media.istockphoto.com/id/1351839574/photo/circle-with-industry-relative-silhouettes-and-3d-green-grass.jpg?s=612x612&w=0&k=20&c=OGTbFB8MLeWP1tZOOPjmSA1mkweiePniwCq7OY6FRVg=",
                "https://media.istockphoto.com/id/1351839574/photo/circle-with-industry-relative-silhouettes-and-3d-green-grass.jpg?s=612x612&w=0&k=20&c=OGTbFB8MLeWP1tZOOPjmSA1mkweiePniwCq7OY6FRVg=",
                "https://media.istockphoto.com/id/1351839574/photo/circle-with-industry-relative-silhouettes-and-3d-green-grass.jpg?s=612x612&w=0&k=20&c=OGTbFB8MLeWP1tZOOPjmSA1mkweiePniwCq7OY6FRVg=",
                "https://media.istockphoto.com/id/1351839574/photo/circle-with-industry-relative-silhouettes-and-3d-green-grass.jpg?s=612x612&w=0&k=20&c=OGTbFB8MLeWP1tZOOPjmSA1mkweiePniwCq7OY6FRVg=",
            ],
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque beatae, doloremque laboriosam sapiente omnis similique quis magnam aspernatur placeat aliquam. Veniam numquam deserunt nemo qui eum blanditiis temporibus itaque quibusdam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod qui reiciendis omnis delectus eius vitae, deserunt perferendis. Ad, provident? Ipsam, rem voluptates cum illo similique assumenda molestiae! Enim, amet harum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, qui enim cumque recusandae perspiciatis laborum debitis voluptatem porro ipsam sed, nobis fuga magnam! Corrupti autem similique laboriosam. Nulla, optio ipsam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit deserunt recusandae ab nesciunt, eligendi consectetur, mollitia sequi cupiditate corporis corrupti vel enim laborum tenetur, doloremque maiores sit. Laborum, rem. Deserunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, omnis? Ducimus iste quo tenetur at. Nemo, numquam adipisci dolor accusantium, veritatis dolore a, qui modi fugiat quas temporibus nisi! Vel! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam repudiandae molestiae officiis enim beatae in minus fuga alias expedita, quaerat ipsum saepe eos laboriosam pariatur quis consectetur nam, neque nulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla veritatis nobis autem ducimus eaque quaerat, facilis quasi amet similique id repudiandae quisquam, libero, omnis et consequuntur qui! Rerum, nobis cupiditate. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas labore magnam tempora nostrum dolor facere? Cumque commodi aliquam minima labore, nobis provident placeat at dolor distinctio quidem voluptas similique? Nulla.", 
        }
    ]
    
    const service = services.find((service) => service.id.toString() === id)
    
    if (!service) {
        notFound()
    }

    return (
        <div>
            <Header text="Services" backgroundImage="https://media.istockphoto.com/id/1807044866/photo/engineer-survey-team-wear-uniform-and-helmet-stand-workplace-checking-blueprint-project-radio.jpg?s=612x612&w=0&k=20&c=94CwjoGL13_ywO8TzmIDrZkzn0jtIUAUtTIY5wEhVkw="/>
            <SingleItemPage itemToString={JSON.stringify(service)}/>
        </div>
    )
}

export default Page