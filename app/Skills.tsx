import React from 'react'
import { 
    RustOriginal, 
    TypescriptOriginal,
    JavascriptOriginal,
    Html5Original,
    Css3Original,
    PythonOriginal,
    COriginal,
    CplusplusOriginal,
    TensorflowOriginal,
    ScikitlearnOriginal,
    NodejsOriginalWordmark,
    NextjsOriginalWordmark,
    ReactOriginal,
    PostgresqlOriginalWordmark,
    OpencvOriginalWordmark,
    BlenderOriginal,
    ThreejsOriginalWordmark,
    PostmanOriginal,
    TailwindcssOriginal,
    GitOriginal,
} from 'devicons-react';

function Skills() {
  return (
    <div className='flex flex-col h-fill md:h-4/5 pb-12 gap-12 items-center justify-center bg-dot-black/[0.1]'>
        <div>
            <h2 className="text-black mt-12 text-4xl font-bold text-center">
                Languages and Frameworks
            </h2>
            <h3 className="text-black mt-4 mb-12 text-2xl font-bold text-center">
                Here&apos;s what I&apos;ve worked with in the past
            </h3>
        </div>
        <div className='flex flex-col flex-wrap w-8/12 items-center justify-center gap-8'>
            
            <div className='flex flex-wrap items-center justify-center gap-4'>
                <TypescriptOriginal size='60' />
                <JavascriptOriginal size='60' />
                <PythonOriginal size='60' />
                <Html5Original size='60' />
                <Css3Original size='60' />
                <RustOriginal size='60' />
                <CplusplusOriginal size='60' />
                <COriginal size='60' />

            </div>

            <div className='flex flex-wrap items-center justify-center gap-4'>
                <TensorflowOriginal size='60' />
                <ScikitlearnOriginal size='60' />
                <OpencvOriginalWordmark size='60' />

            </div>

            <div className='flex flex-wrap items-center justify-center gap-4'>
                <NextjsOriginalWordmark size='60' />
                <NodejsOriginalWordmark size='60' />
                <ReactOriginal size='60' />
                <TailwindcssOriginal size='60' />
                <PostgresqlOriginalWordmark size='60' />
                <ThreejsOriginalWordmark size='60' />
                <BlenderOriginal size='60' />
                <PostmanOriginal size='60' />
                <GitOriginal size='60' />

            </div>

        </div> 

    </div>

  )
}

export default Skills;