import * as React from "react";
import styles from '../../sass/helpers/Grid.module.scss';
import classNames from 'classnames';

type GridItemsAlignment =
    | "flex-start"
    | "center"
    | "flex-end"
    | "stretch"
    | "baseline";

type GridJustify =
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";

type GridSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface GridProps {
    alignItems?: GridItemsAlignment;
    className?: string,
    column?: boolean;
    expanded?: boolean;
    justify?: GridJustify;
    xl?: GridSizes;
    lg?: GridSizes;
    md?: GridSizes;
    row?: boolean;
    sm?: GridSizes;
    xs?: GridSizes;
}

const Grid: React.FC<GridProps> = props => {
    const {
        alignItems,
        className,
        children,
        column,
        expanded,
        justify,
        xl,
        lg,
        md,
        row,
        sm,
        xs
    } = props;

    const isRow = row || !column;

    const classes = classNames(
        className,
        (!isRow ? styles.column : styles.row),
        // Row styling
        (isRow && expanded ? ` ${styles.expanded}` : ""),
        (isRow && justify ? ` ${styles[justify]}` : ""),
        (isRow && alignItems ? ` ${styles["align-" + alignItems]}` : ""),
        // Column styling
        (!isRow && xs ? ` ${styles["xs-" + xs]}` : ""),
        (!isRow && sm ? ` ${styles["sm-" + sm]}` : ""),
        (!isRow && md ? ` ${styles["md-" + md]}` : ""),
        (!isRow && lg ? ` ${styles["lg-" + lg]}` : ""),
        (!isRow && xl ? ` ${styles["xl-" + xl]}` : ""),
    )

    return <div className={classes}>{children}</div>;
};

export default Grid;