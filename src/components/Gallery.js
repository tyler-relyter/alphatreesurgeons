import React from "react";
import FullscreenImage from "./Fullscreen";
import sideyard from "../img/sideyard.jpg";
import sideyard_b4 from "../img/sideyard_b4.jpg";
import sideyard_after from "../img/sideyard_after.jpg";
import backlot from "../img/backlot.jpg";
import backlot_done from "../img/backlot_done.jpg";
import blue_building from "../img/blue_building.jpg";
import beside_driveway from "../img/beside_driveway.jpg";
import beside_driveway2 from "../img/beside_driveway2.jpg";
import chicken_bobcat from "../img/chicken_bobcat.jpg";
import chicken_lawnmower from "../img/chicken_lawnmower.jpg";
import firewood from "../img/firewood.jpg";
import saw_on_stump2 from "../img/saw_on_stump2.jpg";
import clearedlot from "../img/cleared_lot.jpg";
import front_b4 from "../img/front_b4.jpg";
import front_after from "../img/front_after.jpg";
import front_after2 from "../img/front_after2.jpg";
import pine_sideb4 from "../img/pine_sideb4.jpg";
import pine_sideafter from "../img/pine_sideafter.jpg";
import corner_trimmedoak from "../img/corner_trimmedoak.jpg";
import cleared_besidefence from "../img/cleared_besidefence.jpg";
import bigtree_betweenhouses from "../img/bigtree_betweenhouses.jpg";
import trimmed_liveoak from "../img/trimmed_liveoak.jpg";
import climb_pine2 from "../img/climb_pine2.jpg";
import frontyard from "../img/frontyard.jpg";
import trimmedpine from "../img/trimmed_pine.jpg";
import fatstump from "../img/fatstump.jpg";
import pine_top from "../img/pine_top.jpg";
import saw_on_stump from "../img/saw_on_stump.jpg";
import wood_table from "../img/wood_table.jpg";
import wood_table2 from "../img/wood_table2.jpg";
import deadtree from "../img/deadtree.jpeg";
import corner from "../img/corner.jpg";
import "./css/gallery.css";


const Gallery = () => {
    
    

    return (
        <div id="gallery">
            <div className="container-fluid">
                <h1 className="display-1 text-center p-3 m-3"><b><i className="fas fa-tree m-2"></i>Gallery</b><i className="fas fa-tree m-2"></i></h1>
                <div className="row">
                    <div className="col">
                        <FullscreenImage src={sideyard_b4} className="img-fluid m-5 p-3"  alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <FullscreenImage src={sideyard} className="img-fluid m-5 p-3"  alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <FullscreenImage src={sideyard_after} className="img-fluid m-5 p-3"   alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <FullscreenImage src={backlot} className="img-fluid m-5 p-3"   alt="Tree Surgeons" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <FullscreenImage src={backlot_done} className="img-fluid m-5 p-3"   alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <FullscreenImage src={blue_building} className="img-fluid m-5 p-3"   alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <FullscreenImage src={beside_driveway} className="img-fluid m-5 p-3"   alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <FullscreenImage src={beside_driveway2} className="img-fluid m-5 p-3"   alt="Tree Surgeons" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <FullscreenImage src={chicken_bobcat} className="img-fluid m-5 p-3"   alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <FullscreenImage src={firewood} className="img-fluid m-5 p-3"   alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <FullscreenImage src={chicken_lawnmower} className="img-fluid m-5 p-3"   alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <FullscreenImage src={saw_on_stump2} className="img-fluid m-5 p-3"   alt="Tree Surgeons" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <FullscreenImage src={clearedlot} className="img-fluid m-5 p-3"  alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <FullscreenImage src={front_b4} className="img-fluid m-5 p-3"  alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <FullscreenImage src={front_after} className="img-fluid m-5 p-3"  alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <FullscreenImage src={front_after2} className="img-fluid m-5 p-3"   alt="Tree Surgeons" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <FullscreenImage src={pine_sideb4} className="img-fluid m-5 p-3"  alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <FullscreenImage src={pine_sideafter} className="img-fluid m-5 p-3"  alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <FullscreenImage src={corner_trimmedoak} className="img-fluid m-5 p-3"  alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <FullscreenImage src={cleared_besidefence} className="img-fluid m-5 p-3"   alt="Tree Surgeons" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <FullscreenImage src={bigtree_betweenhouses} className="img-fluid m-5 p-3"  alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <FullscreenImage src={trimmed_liveoak} className="img-fluid m-5 p-3"  alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <FullscreenImage src={climb_pine2} className="img-fluid m-5 p-3"  alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <FullscreenImage src={frontyard} className="img-fluid m-5 p-3"   alt="Tree Surgeons" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <FullscreenImage src={trimmedpine} className="img-fluid m-5 p-3"  alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <FullscreenImage src={fatstump} className="img-fluid m-5 p-3"  alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <FullscreenImage src={pine_top} className="img-fluid m-5 p-3"  alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <FullscreenImage src={saw_on_stump} className="img-fluid m-5 p-3"   alt="Tree Surgeons" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <FullscreenImage src={wood_table} className="img-fluid m-5 p-3"  alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <FullscreenImage src={wood_table2} className="img-fluid m-5 p-3"  alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <FullscreenImage src={deadtree} className="img-fluid m-5 p-3"  alt="Tree Surgeons" />
                    </div>
                    <div className="col">
                        <FullscreenImage src={corner} className="img-fluid m-5 p-3"  alt="Tree Surgeons" />
                    </div>
                </div>
            </div>


        </div>
    )
}


export default Gallery;