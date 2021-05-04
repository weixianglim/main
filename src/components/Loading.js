import { useLoading, Puff } from '@agney/react-loading';
import "./Loading.css"

const Loading = () => 
{
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Puff width="50%" />,
    });

    return (
        <div className="loadingContainer" {...containerProps}>
            <div className="loadingCentered" >
                {indicatorEl}   {/* Only renders while loading */}
                <h1>Loading..</h1>
            </div>
        </div>
    );
}

export default Loading