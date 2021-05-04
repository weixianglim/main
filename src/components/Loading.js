import { useLoading, Puff } from '@agney/react-loading';

const Loading = () => 
{
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Puff width="50" />,
    });

    return (
        <section {...containerProps}>
            {indicatorEl}   {/* Only renders while loading */}
        </section>
    );
}

export default Loading