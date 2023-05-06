import SkeletonReact, { SkeletonProps as ISkeletonProps } from 'react-loading-skeleton';

const Skeleton = (props: ISkeletonProps) => {
    return (
        <SkeletonReact
            baseColor='#4a4b4d'
            highlightColor='#797575'
            {...props}
        />
    );
}

export default Skeleton;