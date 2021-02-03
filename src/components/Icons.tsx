import React, { forwardRef } from "react";

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Add from "@material-ui/icons/Add";
import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';

const Icons = {
  Add: forwardRef<SVGSVGElement>((props, ref) => <Add {...props} ref={ref} />),
  Delete: forwardRef<SVGSVGElement>((props, ref) => <DeleteIcon {...props} ref={ref} />),
  Done: forwardRef<SVGSVGElement>((props, ref) => <DoneIcon {...props} ref={ref} />),
  Fail: forwardRef<SVGSVGElement>((props, ref) => <ClearIcon {...props} ref={ref} />),
  InProgress: forwardRef<SVGSVGElement>((props, ref) => <AccessTimeIcon {...props} ref={ref} />),
}

export default Icons;
