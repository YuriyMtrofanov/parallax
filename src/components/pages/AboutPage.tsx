import React from "react";
import { NavLink } from "react-router-dom";

const AboutPage: React.FC = () => {
    return (
        <div className="about-page-content">
            <h1>About this project</h1>
            <div className="about-page-content__p">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde officia, inventore maiores quod nesciunt aliquid. Nobis cupiditate possimus id, officia, animi velit perferendis iure nesciunt in, atque et dolorum commodi.
                Ipsum numquam commodi magni perspiciatis at dolorem sequi suscipit molestiae, aut, explicabo quis tempore. Tempora iure dolorum quis laudantium facere quod reiciendis. Modi saepe, beatae ipsa recusandae autem numquam repellat!
                Laborum pariatur obcaecati fugit eligendi voluptates, quidem debitis? Quo dolores quia dolore odit earum porro libero maxime, voluptates labore fugit rerum amet deleniti explicabo ipsam praesentium tempore blanditiis, laudantium fuga!
                Quia odit quisquam veniam deserunt ullam non ad recusandae commodi doloribus, praesentium libero iure. Saepe voluptatem nostrum sed quas fugiat, tenetur assumenda, rerum illum in consequatur minima! Temporibus, ipsa eum!
                Sit unde illum ipsa praesentium quis eius fuga nihil minus, nesciunt, quidem, harum velit! Laudantium, dolore accusamus ad, quibusdam magni tempora quidem ea quae minus obcaecati corrupti ducimus! Doloribus, odio?
                Illum quaerat nesciunt rem incidunt minima soluta eum impedit. Alias soluta itaque dolor libero eos sunt aspernatur veritatis ad inventore accusantium, reprehenderit debitis quod temporibus vel totam. Magni, dolore distinctio.
                Quam cum accusantium voluptas consequatur beatae dolor consectetur consequuntur dicta odit saepe recusandae quos fuga iusto ratione quidem nobis natus molestiae, tempore quisquam sint dolore nostrum. Consequatur ipsum ea sed?
                Recusandae vero modi, quas minus animi illo nemo odit officia, pariatur quisquam quos. Voluptas, repellendus eveniet doloremque nisi rem dolore facilis ipsa perferendis debitis in minus sit a cupiditate recusandae.
                Esse corporis deleniti dicta eveniet, mollitia unde rerum quidem qui aspernatur, repellat provident. Tempora aperiam distinctio beatae saepe eos harum laborum, obcaecati, libero enim odit mollitia explicabo placeat facere expedita.
                Voluptas ex sit laborum tempora sunt, et minus ipsam odit in aliquid commodi nulla quia neque deleniti cum nisi accusamus quas rem eligendi aliquam corrupti eos omnis aut. Sunt, ea.</p>
            </div>
            <NavLink className="nav-link text-light" to="/">
                <button className="button-start">Back to the main</button>
            </NavLink>
        </div>
    );
};

export default AboutPage;
