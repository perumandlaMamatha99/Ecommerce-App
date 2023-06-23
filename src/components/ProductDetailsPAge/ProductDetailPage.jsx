import React from 'react';
import { useLocation } from 'react-router-dom';
import { storeData } from "../../assets/data/dummyData";
import './ProductdetailPage.css';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import { CardActions, CardMedia, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart';
export default function ProductDetailPage() {
    const location = useLocation();
    const dispatch = useDispatch();
    const handleChange = (e, item) => {
        dispatch(addToCart(item));
    }
    return (
        <div>
            <div className="alert-msg"></div>
            <div className='compoents'>
                {storeData.map((item, index) => {
                    var a = location.state.name;
                    var b = location.state.product;
                    if (a === "Shoes" && item.type == "Shoes") {
                        return <Card
                            variant="outlined"
                            orientation="horizontal"
                            sx={{
                                width: 320,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                                className: "card-element"
                            }}
                        >
                            <AspectRatio ratio="0.8" sx={{ width: 200, '&:hover': { boxShadow: 'lg', backgroundColor: 'green', width: "400" }, }}>
                                <img className='product-image'
                                    src={item.img}

                                />
                            </AspectRatio>
                            <CardContent>
                                <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
                                    <p>{item.name}</p>
                                </Typography>
                                <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
                                    <h3>${item.price}</h3>
                                </Typography>
                                <Button onClick={(e) => handleChange(e, item)}>Add to Cart</Button>
                            </CardContent>
                        </Card>
                    }
                    else if (a === "Bags" && item.type == "Bags") {
                        return <Card
                            variant="outlined"
                            orientation="horizontal"
                            sx={{
                                width: 320,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                                className: "card-element"
                            }}
                        >
                            <AspectRatio ratio="0.8" sx={{ width: 200, '&:hover': { boxShadow: 'lg', backgroundColor: 'green', width: "400" }, }}>
                                <img className='product-image'
                                    src={item.img}

                                />
                            </AspectRatio>
                            <CardContent>
                                <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
                                    <p>{item.name}</p>
                                </Typography>
                                <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
                                    <h3>${item.price}</h3>
                                </Typography>
                                <Button onClick={(e) => handleChange(e, item)}>Add to Cart</Button>
                            </CardContent>
                        </Card>
                    }
                    else if (b === "Hoodies" && item.type == "Hoodies") {
                        return <Card
                            variant="outlined"
                            orientation="horizontal"
                            sx={{
                                width: 320,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                                className: "card-element"
                            }}
                        >
                            <AspectRatio ratio="0.8" sx={{ width: 200, '&:hover': { boxShadow: 'lg', backgroundColor: 'green', width: "400" }, }}>
                                <img className='product-image'
                                    src={item.img}
                                />
                            </AspectRatio>
                            <CardContent>
                                <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
                                    <p>{item.name}</p>
                                </Typography>
                                <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
                                    <h3>${item.price}</h3>
                                </Typography>
                                <Button onClick={(e) => handleChange(e, item)}>Add to Cart</Button>
                            </CardContent>
                        </Card>
                    }
                    else if (b === "Jackets" && item.type == "Jackets") {
                        return <Card
                            variant="outlined"
                            orientation="horizontal"
                            sx={{
                                width: 320,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                                className: "card-element"
                            }}
                        >
                            <AspectRatio ratio="0.8" sx={{ width: 200, '&:hover': { boxShadow: 'lg', backgroundColor: 'green', width: "400" }, }}>
                                <img className='product-image'
                                    src={item.img}
                                />
                            </AspectRatio>
                            <CardContent>
                                <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
                                    <p>{item.name}</p>
                                </Typography>
                                <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
                                    <h3>${item.price}</h3>
                                </Typography>
                                <Button onClick={(e) => handleChange(e, item)}>Add to Cart</Button>
                            </CardContent>
                        </Card>
                    }
                    else if (b === "Jeans" && item.type == "Jeans") {
                        return <Card
                            variant="outlined"
                            orientation="horizontal"
                            sx={{
                                width: 320,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                                className: "card-element"
                            }}
                        >
                            <AspectRatio ratio="0.8" sx={{ width: 200, '&:hover': { boxShadow: 'lg', backgroundColor: 'green', width: "400" }, }}>
                                <img className='product-image'
                                    src={item.img}
                                />
                            </AspectRatio>
                            <CardContent>
                                <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
                                    <p>{item.name}</p>
                                </Typography>
                                <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
                                    <h3>${item.price}</h3>
                                </Typography>
                                <Button onClick={(e) => handleChange(e, item)}>Add to Cart</Button>
                            </CardContent>
                        </Card>
                    }
                    else if (b === "Suits" && item.type == "Suits") {
                        return <Card
                            variant="outlined"
                            orientation="horizontal"
                            sx={{
                                width: 320,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                                className: "card-element"
                            }}
                        >
                            <AspectRatio ratio="0.8" sx={{ width: 200, '&:hover': { boxShadow: 'lg', backgroundColor: 'green', width: "400" }, }}>
                                <img className='product-image'
                                    src={item.img}
                                />
                            </AspectRatio>
                            <CardContent>
                                <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
                                    <p>{item.name}</p>
                                </Typography>
                                <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
                                    <h3>${item.price}</h3>
                                </Typography>
                                <Button onClick={(e) => handleChange(e, item)}>Add to Cart</Button>
                            </CardContent>
                        </Card>
                    }
                })}
            </div>
        </div>
    )
}
