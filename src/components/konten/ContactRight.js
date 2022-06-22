import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const ContactRight = () => {

  const validationSchema = Yup.object({
    fullname: Yup.string().required('fullname wajib disi'),
    email:Yup.string().required('email wajib disi').email('format email salah'),
    message:Yup.string().required('message wajib disi'),
  });
  const formik = useFormik({
    initialValues:{
      fullname:'',
      email:'',
      message:'',
    },
    validationSchema,
    onSubmit:(values,{resetForm}) =>{
      console.log('data terkirim', values);
      resetForm();
    },
  })
  return (
    <div>
      
      <form onSubmit={formik.handleSubmit}>
        <div className='card'>
          <div className='card-header'>
            <h4>Hubungi Kami Sekarang</h4>
          </div>
          <div className='card-body'>
            <div className="mb-3">
              <label htmlFor="fullname" className="form-label">Fullname</label>
              <input 
                type="text" 
                className="form-control" 
                id="fullname" 
                name="fullname"
                value={formik.values.fullname}
                onChange={formik.handleChange}
                placeholder="name@example.com" 
              />
              {
                formik.touched.fullname && formik.errors.fullname && (
                  <div className="invalid-feedback">
                    { formik.errors.fullname }
                  </div>
                )
              }
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="name@example.com" 
              />
              {
                formik.touched.email && formik.errors.email && (
                  <div className="invalid-feedback">
                    { formik.errors.email }
                  </div>
                )
              }
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                className="form-control" 
                id="message" 
                rows="3"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
              ></textarea>
              {
                formik.touched.message && formik.errors.message && (
                  <div className="invalid-feedback">
                    { formik.errors.message }
                  </div>
                )
              }
            </div>
          </div>
          <div className='card-footer'>
            <button type='submit' className='btn btn-primary w-100'>Kirim Pesan</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactRight